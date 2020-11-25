function main(dashboard){
    println(dashboard)
    dashboard.tabs = {
        "test" : {
            "name" : "Test tab",
            "navname" : "Tab navname"
        }
    }

    parse(dashboard, 'body', dashboard.references)
}

function init(dashboard) {}