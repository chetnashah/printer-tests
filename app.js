
console.log('running app.js');

function popuponclick() {
      var my_window = window.open('', 'mywindow', 'status=1,width=350,height=150');
      my_window.document.write('<html><head><title>Print Me</title><style>@media print { html { background-color: #FFFFFF; margin: 0px;} @page { margin: 0mm; }}</style></head>');
      my_window.document.write('<body onafterprint="self.close()">');
      my_window.document.write('<p>When you print this window, it will close afterward.</p>');
      my_window.document.write('</body></html>');
      my_window.print();
}

function writeInIframeAndPrint() {
      var my_window = document.getElementById('print-iframe').contentWindow;
      my_window.document.write('<html><head><title>Print In Iframe</title><style> @media print { html { background-color: #FFFFFF; margin: 0px;} @page { margin: 0mm; }}</style></head>');
      my_window.document.write('<body onafterprint="self.close()">');
      my_window.document.write('<p>These are Iframe window contents, and will be printed. No Headers or footers - This is done via print css using @page and html margin</p>');
      my_window.document.write('</body></html>');
      my_window.print();
}

function closePrint () {
  document.body.removeChild(this.__container__);
}

function setPrint () {
  this.contentWindow.__container__ = this;
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.focus(); // Required for IE
  this.contentWindow.print();
}

function printPage (sURL) {
  var oHiddFrame = document.createElement("iframe");
  oHiddFrame.onload = setPrint;
  oHiddFrame.style.position = "fixed";
  oHiddFrame.style.right = "0";
  oHiddFrame.style.bottom = "0";
  oHiddFrame.style.width = "0";
  oHiddFrame.style.height = "0";
  oHiddFrame.style.border = "0";
  oHiddFrame.src = sURL;
  document.body.appendChild(oHiddFrame);
}

