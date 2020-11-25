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
                    "background" : {
                        "name" : "A test background image",
                        "url" : "https://images5.alphacoders.com/323/323327.jpg"
                    }
                }
            }
        }
    }
    query('body').innerHTML = ''
    parse(dashboard, 'body', dashboard.references)
    println(dashboard)
}

function init(dashboard) {}