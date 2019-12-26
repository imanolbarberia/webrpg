var Canvas = function(div, w, h)
{
  this.w = w;
  this.h = h;
  this.divname = div;

  this._canvas = [];

  /*
   * Initialization function
   */
  this.init = function()
  {
    console.log("Divname: " + this.divname)
    this._canvas_div = document.getElementById(this.divname)
    for( j=0; j<this.h; j++ ) {
      this._canvas[j] = []
      for( i=0; i<this.w; i++ ) {
        this._canvas[j][i] = "O";
      }
    }

    this.draw();
  }


  /*
   * draw() - Draw the current canvas in the selected DIV
   */
  this.draw = function()
  {
    str = "<p>";
    for( j=0; j<this.h; j++ ) {
      for( i=0; i<this.w; i++ ) {
        str += this._canvas[j][i];
      }
      str += "</br>"
    }
    str += "</p>";
    this._canvas_div.innerHTML = str;
  }

}
