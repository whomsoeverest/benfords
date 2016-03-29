$( document ).ready(function() {
    var ctx = $("#freqChart").get(0).getContext("2d");
   
   var labels = []
       ,counts = [];
    
    $('.dataPoint').each(function() {
        var td = $(this).find('td');
        labels.push($(td[0]).html());
        counts.push(parseInt($(td[1]).html()));
    });
    
    var vals = {
        labels: labels
        ,datasets: [{
            label: "Data!"
            ,fillColor: "rgba(220,220,220,0.5)"
            ,strokeColor: "rgba(220,220,220,0.8)"
            ,highlightFill: "rgba(220,220,220,0.75)"
            ,highlightStroke: "rgba(220,220,220,1)"
            ,data: counts
        }]
    };
    
    console.log(vals);
   
    var freqBarChart = new Chart(ctx).Bar(vals,{});
});