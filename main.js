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

  }
}
