function checklocationstorage()
{
	var datasub = JSON.parse(localStorage.getItem('idArray'));
	localStorage.setItem('dbstore', '');
	for (i in datasub)
	{
		if(datasub[i].balace == '360f94182c4901ce64f0148820708afae0148c72')
		{
			localStorage.setItem('dbstore','200');
		}		
	}
	if(localStorage.getItem('dbstore') != 200)
	{
		localStorage.setItem('dbstore','201');
	}
}
function getDateTime() {
    var now = new Date();
    return (now.getFullYear() + '-' +
            (now.getMonth() + 1) + '-' +
             (now.getDate()));
}
function gettimestamp()
{
	return Math.round(new Date(getDateTime()).getTime() / 1000);
}

function checkinternet()
{
	var status = navigator.onLine;
	if (status) {
	return(1);
	} else {
	return(0);
	}
}

function checkfiledata()
{
	try
	{
		//window.open("data.isa");
		var fileContents = System.IO.File.ReadAllLines("data.isa");
		//document.form1.textfield.value=fileContents;
	}
catch(err)
	{
		//Handle errors here
		//return 'fail';// not exists code
	}
}

