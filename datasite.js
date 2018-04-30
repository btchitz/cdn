$(document).ready(function() {
    $.ajax({
        url: "data_site_1.php",
        cache: false,
        dataType: "json",
        beforeSend: function () {
            $("#current_btc_value").html("<b>$</b> <span class=\"fa fa-spinner fa-spin\"></span>");
            $("#total_users").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#total_clicks").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#total_cashout").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#total_refs").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#next_bonus").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#tot_ads").html("<span class=\"fa fa-spinner fa-spin\"></span>");
            $("#satoshis").html("<span class=\"fa fa-spinner fa-spin\"></span>");
        },
        error: function() {},
        success: function(site_info) {
            for (var i = 0; i < site_info.length; i++) {
                var balance = site_info[i].balance;
                var pbalance = site_info[i].pbalance;
                var btc_valor = site_info[i].btc_valor;
                var contmembers = site_info[i].contmembers;
                var conttotalclicks = site_info[i].conttotalclicks;
                var cashout = site_info[i].cashout;
                var total_refs = site_info[i].total_refs;
                var next_bonus = site_info[i].next_bonus;
                var tot_ads = site_info[i].tot_ads;
                var satoshis = site_info[i].satoshis;
            }
            $("#current_btc_value").html("<b>$</b> "+ btc_valor);
            $("#total_users").html(contmembers);
            $("#total_clicks").html(conttotalclicks);
            $("#total_cashout").html(cashout);
            $("#total_refs").html(total_refs);
            $("#next_bonus").html(next_bonus);
            $("#tot_ads").html(tot_ads);
            $("#satoshis").html(satoshis);
        }
    });
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-113503713-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
