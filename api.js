function main() {
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
        document.onclick = clickedHandler
    }
}

async function clickedHandler() {
    await navigator.clipboard.writeText(copy_value)
    window.location = "discord://discordapp.com/channels/1008083647817072640/1064639476107837521"; 
}

main()
