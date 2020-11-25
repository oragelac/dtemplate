function main(dashboard){
    println(dashboard)
    dashboard.tabs = {
        "test" : {
            "name" : "Test tab",
            "navname" : "Tab navname",
            "info" : {
                "content" : "info box test"
            },
            "gallery" : {
                "items" : {
                    "url" : "https://images5.alphacoders.com/323/323327.jpg"
                }
            }
        }
    }

    parse(dashboard, 'body', dashboard.references)
}

function init(dashboard) {}