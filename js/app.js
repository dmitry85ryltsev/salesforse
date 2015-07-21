function loadSlideJS(valueString){

	if (jQuery("#chartwidget").length){
		initChart();
	}

	if (jQuery("#sliderwidget").length){
		initSlider();
		if (valueString != null){
			var valueDivider = valueString.lastIndexOf("|");
				if (valueDivider != -1){
					var val = parseInt(valueString.substring(valueDivider+1));
					jQuery("#sliderwidget").slider("value", val);
				}
		}
	}

	if (jQuery("#sortablewidget").length){
		initSortable();
	}
	
	if (typeof startSlideAnimation == 'function'){
		startSlideAnimation(); 
	}
}

function getJSValues(){
  var result = "";
  if (jQuery("input.feedback").length){
	jQuery("input.feedback").each(function(){
		result += "["+ jQuery(this).attr("sobject") +"{"+ 
                jQuery(this).attr("sfield") +"="+ jQuery(this).val() +"&;}]";
	});
  }
  return result;
}

function CTAPPgoToPrevious()
{
    window.location  = ("ios:CTAPPgoToPrevious");
}

function CTAPPgoToNext()
{
    window.location  = ("ios:CTAPPgoToNext");
}

function CTAPPgoToSlide(slideNum)
{
    window.location  = ("ios:CTAPPgoTo--" + slideNum);
}

function CTAPPgoToFirst(slideNum)
{
    window.location  = ("ios:CTAPPgoToFirst");
}

function CTAPPnewRecord(SObjectName, RecordTypeId, FieldsObj)
{
	var obj = {
		'SObjectName': SObjectName,
		'RecordTypeId': RecordTypeId,
		'FieldsObj': FieldsObj
	}
	var jsonString = (JSON.stringify(obj));
	var escapedJsonParameters = escape(jsonString);
	var url = SObjectName + '://' + RecordTypeId + "#" + escapedJsonParameters;
	document.location.href = url;
}

function skipTenPercent() {	
    var video = document.getElementById("Video1");

video.play();
setTimeout(function() { video.currentTime = (video.duration / 100 * 10).toFixed() }, 500);

} 

function playVideo() {
   var video = document.getElementById("Video1");
    video.play();

 	setTimeout(function() { video.pause() }, 500);
}

function CTAPPstartRecordingAudio(){
    window.location  = ("ios:CTAPPstartRecordingAudio");
}

