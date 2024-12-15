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
    if(url.includes("stockx")) {
        stockx_url = url.split('=')[1]
        window.location = "stockx://search?s=" + stockx_url
    }
    if(url.includes("copy")) {
        copy_value = url.split('=')[1]
        document.onclick = clickedHandler
    }
    if(url.includes("coin")) {
        coin_url = url.split('=')[1]
        document.onclick = window.location = "bitget://app.bitget.com/home/coin?symbol=" + coin_url
    }
}

async function clickedHandler() {
    await navigator.clipboard.writeText(copy_value)
    window.location = "discord://discordapp.com/channels/1162420839262724226/1265394024945287219"; 
}

main()
