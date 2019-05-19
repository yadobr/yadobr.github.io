// class Zoom
// {
//     constructor( element : any )
//     {
//         element.addEventListener( 'wheel', this.wheel, false );
//
//         // Count of wheel revolutions
//         element.count = 0;
//     }
//
//     wheel( e : any )
//     {
//         //let direction : boolean; // False is up, true is down
//
//         //direction = e.deltaY < 0 ? true : false;
//
//         //console.log(this.count);
//
//         this.count = e.deltaY < 0 ? ++this.count : --this.count;
//         this.style.transform.scale = this.count * 0.1;
//         console.log(this.count);
//     }
// }
//
// var zoom = new Zoom( document.querySelector('img') );
