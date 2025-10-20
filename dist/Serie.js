System.register([], function (exports_1, context_1) {
    "use strict";
    var Serie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Serie = class Serie {
                constructor(id, name, channel, seasons, description, image, link) {
                    this.id = id;
                    this.name = name;
                    this.channel = channel;
                    this.seasons = seasons;
                    this.description = description;
                    this.image = image;
                    this.link = link;
                }
            };
            exports_1("Serie", Serie);
        }
    };
});
