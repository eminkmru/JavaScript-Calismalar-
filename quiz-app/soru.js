function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}


let sorular = [
    new Soru("1 Hangisi js paket yönetim uygulamasıdır.",{a: "Node.js", b: "npm", c: "nuget"}, "b"),
    new Soru(" 2 Hangisi js paket yönetim uygulamasıdır.",{a: "Node.js", b: "npm", c: "nuget"}, "b"),
    new Soru("3 Hangisi js paket yönetim uygulamasıdır.",{a: "Node.js", b: "npm", c: "nuget"}, "b"),
    new Soru("4 Hangisi js paket yönetim uygulamasıdır.",{a: "Node.js", b: "npm", c: "nuget"}, "b")
];

// let sorular = [
//     new Soru("Hangisi javascript dili için kullanılan bir tarayıcı çerçevesidir?", { a: "React", b: "Vue", c: "Angular", d: "Ember"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir veritabanı yönetim sistemidir?", { a: "MongoDB", b: "Cassandra", c: "CouchDB", d: "Firebase"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir web frameworkudur?", { a: "Express", b: "Meteor", c: "Django", d: "Ruby on Rails"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir build araçlarındandır?", { a: "Webpack", b: "Babel", c: "Grunt", d: "Gulp"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir test araçlarındandır?", { a: "Jest", b: "Mocha", c: "Chai", d: "Jasmine"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir task runner'dır?", { a: "Gulp", b: "Grunt", c: "Npm Scripts", d: "Yarn"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir package manager'dır?", { a: "Yarn", b: "Npm", c: "Bower", d: "Pnpm"
//     }, "b"),
//     new Soru("Hangisi javascript dili için kullanılan bir state management library'dir?", { a: "Redux", b: "MobX", c: "Unstated", d: "Recoil"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir front-end framework'dur?", { a: "Bootstrap", b: "Materialize", c: "Foundation", d: "Semantic UI"
//     }, "a"),
//     new Soru("Hangisi javascript dili için kullanılan bir serverless platformudur?", { a: "Firebase", b: "AWS Lambda", c: "Google Cloud Functions", d: "Microsoft Azure Functions"
//     }, "a")
//   ];
  