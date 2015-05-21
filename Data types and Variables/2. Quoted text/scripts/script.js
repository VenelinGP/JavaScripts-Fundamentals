taskName = "2. Quoted text";
message = "Create a string variable with quoted text in it."
message = "For example: 'How you doin'?', Joey said'. <br/><br/>"


function Main(bufferElement) {

    var text = '"How you doin?", Joey said';
    WriteLine(Format("var text = '{0}';", text));
    WriteLine('console.log(text);');
    WriteLine(Format("{0}", text));
}

