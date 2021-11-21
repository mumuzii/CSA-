var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
          { name: "Amber",sex: "woman"},
          { name: "Barbara",sex: "woman"},
          { name: "Venti",sex: "man"}], 
    work: { 
            time: "2021", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

var newdata = JSON.parse(JSON.stringify(data));
data.work.time = 2020;
console.log(data);
console.log(newdata);
console.log(data.age === newdata.age);