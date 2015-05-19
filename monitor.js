$.getJSON("./config.json", function(servers){
    $.each(servers, function(key, value){
      $("#status").append("<div class='anode node"+key+"'><div class='progress'><div class='progress-bar  progress-bar-danger' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'   style='width: 100%;'></div><span>Down</span></div></div>");
      $("#name").append("<div class='anode node"+key+"'><div><p class='text-center'>"+value.name+"</p></  div></div>");
      //$("#node").append("<div class='anode node"+key+"'><div><p class='text-center'>"+value.node+"</p></  div></div>");
      $("#type").append("<div class='anode node"+key+"'><div><p class='text-center'>"+value.type+"</p></  div></div>");
      $("#host").append("<div class='anode node"+key+"'><div><p class='text-center'>"+value.host+"</p></  div></div>");
      $("#location").append("<div class='anode node"+key+"'><div><p class='text-center'>"+value.location+"</  p></div></div>");
      $("#uptime").append("<div class='anode node"+key+"'><div><p class='text-center'>0 days</p></div></div>  ");
      $("#load").append("<div class='anode node"+key+"'><div><p class='text-center'>0.00</p></div></div>");
      $("#ram").append("<div class='anode node"+key+"'><div class='progress progress-striped active'><div   class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'  style='width: 0%;'></div><span>0%</span></div></div>");
      $("#hdd").append("<div class='anode node"+key+"'><div class='progress progress-striped active'><div   class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'  style='width: 0%;'></div><span>0%</span></div></div>");
      $.getJSON("http://"+value.ip+"/agent.php?callback=?", function(data){
        $('.node'+key).find('.progress-bar-danger').removeClass('progress-bar-danger').parent().find('span')  .html("Up");
        $('#uptime').find('.node'+key).find('p').html(data.uptime);
        $('#load').find('.node'+key).find('p').html(data.load);
        $('#ram').find('.node'+key).find('.progress-bar').css("width", Math.round(data.ram) + "%").parent().  find('span').html(Math.round(data.ram) + "%");
        $('#hdd').find('.node'+key).find('.progress-bar').css("width", Math.round(data.hdd) + "%").parent().find('span').html(Math.round(data.hdd) + "%");
      });
    });
  });
