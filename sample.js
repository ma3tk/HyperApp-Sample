const { h, app } = hyperapp

app({
    model: "Hello World",
    view: model => h("h1", {}, model)
})


