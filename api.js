var url = window.location.href
if(url.includes("snkrs")) {
    snkrs_url = url.split('=')[1]
    window.location = "SNKRS://product/" + snkrs_url; 
}
if(url.includes("nike")) {
    nike_url = url.split('=')[1]
    window.location = "mynike://x-callback-url/product-details?style-color=" + nike_url + "&redirect=true&platform=ios%60"; 
}
if(url.includes("copy")) {
    copy_value = url.split('=')[1]
    var copy_this = document.createElement("input")
    copy_this.setAttribute("type", "text")
    copy_this.value = copy_value
    copy_this.select()
    copy_this.setSelectionRange(0, 99999)
    window.location = "discord://discordapp.com/channels/1008083647817072640/1064639476107837521"; 
}