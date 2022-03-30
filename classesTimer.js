function MyClass () {
    this.name = 'John'
    
    this.saySomethingWeird = function () {
        console.log(this.name)
    }
    
    this.say = function () {

        const self = this

        function doStuff () {
            self.saySomethingWeird()
        }

        doStuff()
    }
}

const myObject = new MyClass()
myObject.say()

// const outerThis = this

// function a () {
//     console.log('a', this, outerThis, this === outerThis)
// }

// const b = () => {
//     console.log('b', this, outerThis, this === outerThis)
// }

// const c = function () {
//     console.log('c', this, outerThis, this === outerThis)
// }

// a()
// b()
// c()

// class Clock {
//     constructor ({template}) {  
//         this.template = template
//     }

//     // render = () => {
//     render ()  {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
        
//     stop () {
//       clearInterval(this.timer);
//     }
  
//     start () {
//       this.render()
//     //   this.timer = setInterval(this.render.bind(this), 1000)
//       this.timer = setInterval(this.render, 1000)
//     } 
// }
  
// let clock = new Clock({template: 'h:m:s'});
// clock.start()