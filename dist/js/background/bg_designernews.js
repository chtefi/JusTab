function getDesignerNewsData(a){var b="https://www.designernews.co/api/v2/",c="stories",d="?client_id=e7c9f9422feb744c661cc25a248d3b7206962f0605e174ae30aab12a05fb107a";ajax("GET",b+c+d).then(function(b){localStorage.setItem("Designernews_error",!1),serviceData.DN.error=!1,localStorage.setItem("Designernews",JSON.stringify(b)),serviceData.DN.JSON=b,dnHTML(),a&&a()},function(){localStorage.setItem("Designernews_error",!0),serviceData.DN.error=!0,a&&a()})}function dnHTML(){if(serviceData.DN.JSON){var a=serviceData.DN.JSON,b="";a.stories.forEach(function(a){a.url||(a.url="https://www.designernews.co/stories/"+a.id),b+=a.badge?'<div class="core-item waves-effect dn-link-container dn-link-with-badge"><img src="/img/dn_badges/badge_'+a.badge+'.png" class="dn-badge">':'<div class="core-item waves-effect dn-link-container">',b+='<a href="'+a.url+'" class="dn-story-url service-link" target="_blank">'+htmlEncode(a.title)+'</a><a href="https://www.designernews.co/stories/'+a.id+'" class="dn-comments-url" target="_blank">'+htmlEncode(a.comment_count+" comments - "+a.vote_count+" points")+"</a></div>"}),localStorage.setItem("DesignernewsHTML",b),serviceData.DN.HTML=b}}