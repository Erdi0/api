var url = window.location.href
if(url.includes("snkrs")) {
    snkrs_url = url.split('=')[1]
    window.location = "SNKRS://product/" + snkrs_url; 
}
if(url.includes("nike")) {
    nike_url = url.split('=')[1]
    window.location = "mynike://x-callback-url/product-details?style-color=" + nike_url + "&redirect=true&platform=ios%60"; 
}