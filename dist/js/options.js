function save_status_options(){chrome.storage.sync.set({GC_status:$("input[type=checkbox][name=GC_status]").is(":checked"),GM_status:$("input[type=checkbox][name=GM_status]").is(":checked"),FB_status:$("input[type=checkbox][name=FB_status]").is(":checked"),CP_status:$("input[type=checkbox][name=CP_status]").is(":checked"),SB_status:$("input[type=checkbox][name=SB_status]").is(":checked"),SAB_status:$("input[type=checkbox][name=SAB_status]").is(":checked"),DN_status:$("input[type=checkbox][name=DN_status]").is(":checked"),HN_status:$("input[type=checkbox][name=HN_status]").is(":checked"),GH_status:$("input[type=checkbox][name=GH_status]").is(":checked"),PH_status:$("input[type=checkbox][name=PH_status]").is(":checked"),DR_status:$("input[type=checkbox][name=DR_status]").is(":checked")},function(){chrome.runtime.getBackgroundPage(function(a){a.refreshServiceData()})})}function save_options(){var a=[];$.each($(".calendar-checkbox.checked"),function(){a.push($(this).data("id"))}),FB_url=formatUrl("FB-url"),CP_address=formatUrl("CP-address"),SB_address=formatUrl("SB-address"),SAB_address=formatUrl("SAB-address"),chrome.storage.sync.set({calendars:a,GC_days:$("#GC-days").val(),GC_refresh:$("#GC-refresh").val(),GM_emails:$("#GM-emails").val(),GM_refresh:$("#GM-refresh").val(),FB_url:FB_url,FB_refresh:$("#FB-refresh").val(),CP_address:CP_address,CP_port:$("#CP-port").val(),CP_key:$("#CP-key").val(),CP_refresh:$("#CP-refresh").val(),SB_address:SB_address,SB_port:$("#SB-port").val(),SB_key:$("#SB-key").val(),SB_refresh:$("#SB-refresh").val(),SAB_address:SAB_address,SAB_port:$("#SAB-port").val(),SAB_key:$("#SAB-key").val(),SAB_history:$("#SAB-history").val(),SABQ_refresh:$("#SABQ-refresh").val(),SABH_refresh:$("#SABH-refresh").val(),DN_username:$("#DN-username").val(),DN_password:$("#DN-password").val(),DN_refresh:$("#DN-refresh").val(),HN_refresh:$("#HN-refresh").val(),GH_refresh:$("#GH-refresh").val(),PH_refresh:$("#PH-refresh").val(),DR_small_images:$(".dr-small-images-checkbox").hasClass("checked"),DR_gifs:$(".dr-gif-checkbox").hasClass("checked"),DR_refresh:$("#DR-refresh").val()},function(){chrome.runtime.getBackgroundPage(function(a){a.refreshServiceData()});var a=$(".status");a.html("Options saved."),a.css("bottom","16px"),setTimeout(function(){a.css("bottom","-48px"),a.html("")},1e3)})}function restore_options(){$("input[type=checkbox][name=GC_status]").attr("checked",serviceData.GC.status),$("#GC-days").val(serviceData.GC.days),$("#GC-refresh").val(serviceData.GC.refresh),$("input[type=checkbox][name=GM_status]").attr("checked",serviceData.GM.status),$("#GM-refresh").val(serviceData.GM.refresh),$("input[type=checkbox][name=FB_status]").attr("checked",serviceData.FB.status),$("#FB-url").val(serviceData.FB.url),$("#FB-refresh").val(serviceData.FB.refresh),$("input[type=checkbox][name=CP_status]").attr("checked",serviceData.CPS.status),$("#CP-address").val(serviceData.CPS.address),$("#CP-port").val(serviceData.CPS.port),$("#CP-key").val(serviceData.CPS.key),$("#CP-refresh").val(serviceData.CPS.refresh),$("input[type=checkbox][name=SB_status]").attr("checked",serviceData.SB.status),$("#SB-address").val(serviceData.SB.address),$("#SB-port").val(serviceData.SB.port),$("#SB-key").val(serviceData.SB.key),$("#SB-refresh").val(serviceData.SB.refresh),$("input[type=checkbox][name=SAB_status]").attr("checked",serviceData.SABQ.status),$("#SAB-address").val(serviceData.SABQ.address),$("#SAB-port").val(serviceData.SABQ.port),$("#SAB-key").val(serviceData.SABQ.key),$("#SAB-history").val(serviceData.SABH.length),$("#SABQ-refresh").val(serviceData.SABQ.refresh),$("#SABH-refresh").val(serviceData.SABH.refresh),$("input[type=checkbox][name=DN_status]").attr("checked",serviceData.DN.status),$("#DN-username").val(serviceData.DN.username),$("#DN-password").val(serviceData.DN.password),$("#DN-refresh").val(serviceData.DN.refresh),$("input[type=checkbox][name=HN_status]").attr("checked",serviceData.HN.status),$("#HN-refresh").val(serviceData.HN.refresh),$("input[type=checkbox][name=GH_status]").attr("checked",serviceData.GH.status),$("#GH-refresh").val(serviceData.GH.refresh),$("input[type=checkbox][name=PH_status]").attr("checked",serviceData.PH.status),$("#PH-refresh").val(serviceData.PH.refresh),$("input[type=checkbox][name=DR_status]").attr("checked",serviceData.DR.status),serviceData.DR.smallImages&&$(".dr-small-images-checkbox").addClass("checked"),serviceData.DR.gifs&&$(".dr-gif-checkbox").addClass("checked"),$("#DR-refresh").val(serviceData.DR.refresh)}function formatUrl(a){return"https://"==$("#"+a).val().slice(0,8)||"http://"==$("#"+a).val().slice(0,7)?$("#"+a).val():"http://"+$("#"+a).val()}$.when(serviceDataRefreshDone).then(function(){restore_options(),dragula([document.getElementById("services-menu")],{moves:function(a,b,c){return"drag-handle"===c.className},direction:"vertical"}).on("dragend",function(){var a=[];$(".options-menu-link").each(function(b,c){c=$(c),c.data("service-id")&&a.push($(c).data("service-id"))}),localStorage.setItem("serviceOrder",a)});var a=localStorage.getItem("serviceOrder");a&&(a=a.split(","),$.each(a,function(a,b){serviceHTML=$("#services-menu").find("[data-service-id="+b+"]"),$("#services-menu").append(serviceHTML)})),$("#loading").html(serviceData.spinner),chrome.identity.getAuthToken({interactive:!0},function(a){var b="https://www.googleapis.com/calendar/v3/users/me/calendarList";$.ajax({url:b+"?oauth_token="+a}).done(function(a){$("#loading").hide();var b=serviceData.GC.calendars;$.each(a.items,function(a,c){$(".calendar-select-container").append($.inArray(c.id,b)>-1?"<div class='calendar-checkbox checkbox-container checked' data-id="+c.id+"><div class='checkbox'><div class='checkbox-mark'></div></div><span class='checkbox-label'>"+c.summary+"</span></div>":"<div class='calendar-checkbox checkbox-container' data-id="+c.id+"><div class='checkbox'><div class='checkbox-mark'></div></div><span class='checkbox-label'>"+c.summary+"</span></div>")})}).fail(function(a,b,c){console.log(a,b,c),$("#loading").hide(),$(".calendar-select-container").append('<div><div class="error-icon"></div><p>Failed to connect to Google Calendar check your connection and refresh.</p></div>')})}),$(".options-menu-icon").bind("click",function(){$(".options-menu").hasClass("expanded")?$(".options-menu").removeClass("expanded"):$(".options-menu").addClass("expanded")}),$(".options-menu-link").bind("click",function(){var a=$(this).data("title"),b="#"+$(this).data("color");"Support"==a?$(".button-bar").hide():$(".button-bar").show(),$(".options-menu").removeClass("expanded"),$(".options-window").hide(),$("."+a).show(),$(".options-menu-link").removeClass("active"),$(this).addClass("active"),$(".options-window-title").css("background-color",b),$(".save-settings").css("color",b),$(".options-window-title-text").text(a)}),$(document).on("change",'input[type="text"], input[type="password"], .checkbox-container',function(){save_options()}),$(".DN-login-status").html(serviceData.DN.token?"<div class='done-all-icon'></div>":"<div class='error-icon'></div>"),$(".switch input[type=checkbox]").bind("change",function(){save_status_options()})});