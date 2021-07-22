
            function Replace() {
                var text = document.getElementById("text").value;
                var word = document.getElementById("word").value;
                var replace = document.getElementById("replace").value;
				
                document.getElementById("para").innerHTML = "<b>Before Editing the Text:</b> " + text;
                var edit = text.replaceAll(word, replace);
				
                document.getElementById("epara").innerHTML = "<b>After Editing the Text:</b> " + edit;
            }
        