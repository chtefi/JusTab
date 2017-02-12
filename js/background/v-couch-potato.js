import moment from 'moment';
import ajax from 'modules/ajax';

export default {
  computed: {
    couchPotatoService () {
      return this.services.find((s) => { return s.id === 3; });
    }
  },
  methods: {
    couchPotato () {
      return this.getMovies()
        .then(this.couchPotatoComponents)
        .catch((error) => {
          if (error) console.error(error);
          localStorage.setItem('couchPotatoError', true);
        });
    },

    getMovies () {
      return new Promise((resolve, reject) => {
        var apiUrls = [
          `${this.couchPotatoService.apiUrl}/movie.list/?release_status=snatched,downloaded,available`,
          `${this.couchPotatoService.apiUrl}/movie.list/?status=active&limit_offset=25`
        ];
        var promises = [];

        apiUrls.forEach(function (url) {
          promises.push(
            ajax('GET', url)
              .then((data) => {
                localStorage.setItem('couchPotatoError', false);
                return data;
              })
          );
        });

        Promise.all(promises).then((results) => {
          resolve({ snatched: results[0], wanted: results[1]});
        });
      });
    },

    couchPotatoComponents (data) {
      let components = [];

      components.push({
        name: 'v-panel-subheader',
        props: {
          text: 'Snatched'
        }
      });

      data.snatched.movies.forEach((movie) => {
        components.push(this.buildMovieItem(movie));
      });

      components.push({
        name: 'v-panel-subheader',
        props: {
          text: 'Wanted'
        }
      });

      data.wanted.movies.forEach((movie) => {
        components.push(this.buildMovieItem(movie));
      });

      localStorage.setItem('couchPotatoComponents', JSON.stringify(components));
    },

    buildMovieItem (movie) {
      var posterUrl;
      var movieDate = new Date(movie.info.released);
      var date;

      if (movie.info.images.poster_original && movie.info.images.poster_original[0] && movie.info.images.poster_original[0].substr(-4) != 'None') {
        posterUrl = movie.info.images.poster[0];
      }
      else {
        posterUrl = 'img/poster_fallback.png';
      }

      if (moment(movieDate).year() != moment().year()) {
        date = moment(movieDate).format('MMM D, YYYY');
      }
      else {
        date = moment(movieDate).format('MMM D');
      }

      return {
        name: 'v-panel-item',
        props: {
          image: posterUrl,
          title: movie.title,
          collapseText: date,
          components: [
            {
              name: 'v-panel-item-button',
              props: {
                url: 'http://www.imdb.com/title/' + movie.identifiers.imdb,
                iconClass: 'info-icon'
              }
            }
          ]
        }
      };
    }
  }
};
