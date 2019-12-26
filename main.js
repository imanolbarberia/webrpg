var WebRPG = function(c_div)
{
  this.canvas_div = c_div
  /*
   * init() - initialization function
   */
  this.init = function()
  {
    this.canv = new Canvas(this.canvas_div, 10, 10);
    this.canv.init();

    this.canv.pset(3,3,"A");
    this.canv.pset(4,8,"X");
    this.canv.draw();
  }
}
