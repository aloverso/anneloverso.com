/*
 * Creates an open/close element that shows or hides
 * its containing div when clicked
 */
function openClose(theID) {
	var elem = document.getElementById(theID);
	if (elem.style.display == "block") {
		elem.style.display = "none" 
	} else {  
		elem.style.display = "block" 
	} 
}

/*
 * Checks all tags and calls showHide to update display
 */
function selectAll() {
	var all_tags = document.getElementsByTagName("input");
	for (i=0; i<all_tags.length; i++) {
		all_tags[i].checked = true;
	}
	showHide();
}

/*
 * Unchecks all tags and calls showHide to update display
 */
function selectNone() {
	var all_tags = document.getElementsByTagName("input");
	for (i=0; i<all_tags.length; i++) {
		all_tags[i].checked = false;
	}
	showHide();
}

/*
function selectOne(text) {
	selectNone();
	var all_tags = document.getElementsByTagName("input");
	for (i=0; i<all_tags.length; i++) {
		if (text == all_tags[i].innerText) {
			all_tags[i].checked = true;
			break;
		}
	}
	showHide();
}*/

/*
 * Selects and displays all tags
 */
function showAll() {
	selectAll();
	var all_exp = document.getElementsByClassName("experience");
	for (i=0; i<all_exp.length; i++) {
		all_exp[i].style.display="block";
	}
	reSort();
}

function showHide() {
	// declare variables
	var checked_tags = [],
		unchecked_tags = [],
		all_tags = document.getElementsByTagName("input"),
		all_tags_divs = document.getElementsByName("checktagdiv"),
		det_tags = document.getElementsByClassName("tag"),
		blocks_to_show = [],
		all_exp = document.getElementsByClassName("experience");

	// go through all tags and sort if checked or unchecked
	for (i=0; i<all_tags.length; i++) {
		if (all_tags[i].checked == true) {
			checked_tags.push(all_tags_divs[i]);
		} else {
			unchecked_tags.push(all_tags_divs[i]);
		}
	}

	// go through all tags in details
	// for each tag, check if it is marked as checked
	// if so, mark the detail containing it as a block to show in the exp section
	for (i=0; i<det_tags.length; i++) {
		var pid = det_tags[i].parentNode.parentNode.parentNode.id; // ID of detail is name of exp block
		if (blocks_to_show.indexOf(pid) == -1) { // add only if block not already marked to hide
			for (j=0; j<checked_tags.length; j++) {
				if (det_tags[i].textContent.replace(/\s+/g, '') == checked_tags[j].textContent.replace(/\s+/g, '')) {
					blocks_to_show.push(pid);
					break;
				}
			}
		}
	}

	// go through all experience blocks
	// mark as none or block, if it should be shown
	for (i=0; i<all_exp.length; i++) {
		if (blocks_to_show.indexOf(all_exp[i].getAttribute("name")) > -1) { 
			all_exp[i].style.display="block";
		} else {
			all_exp[i].style.display="none";
		}
	}
	reSort();
}

// takes a list like from getElementsByClassName and sorts it by an attribute
function sortByOrder(list, attr) {
	var arr = [];
	for (i=0; i<list.length; i++) {
		arr[i] = list[i];
	}
	arr.sort(function(a,b) { return b.getAttribute(attr) - a.getAttribute(attr) } );
	return arr;
}

// creates rows and blocks in exp section based on how many are to be displayed
function reSort() {
	var shown = [],
		hidden = [],
		all_exp = document.getElementsByClassName("experience"),
		fullstr = "",
		count=0,
		sec = document.getElementById("resortsection");

	all_exp = sortByOrder(all_exp, "order");
	
	// go through experience blocks, mark as shown or hidden
	for (i=0; i<all_exp.length; i++) {
		if (all_exp[i].style.display=="block") {
			shown.push(all_exp[i]);
		} else {
			hidden.push(all_exp[i]);
		}
	}
	var num = shown.length;

	// loop through all rows and create html for each row
	for (row=0; row<num/3; row++) {

		var str="<div class='row'>",
			n=0,
			span="";

		// need to organize differently based on whether it fits in a 3-per-row grid
		if (num%3==1) { // if one extra, make first two rows of 2-per-row
		
			// if one of first two rows, span6
			if (row==0 || row==1) {
				if (num==1) { // if only one element, only loop once
					n=1;
				} else {
					n=2;
				}
				span = "<div class='span6'>";
			} else {
				n=3;
				span = "<div class='span4'>";
			}
		} else if (num%3==2) { // two extras, make first row with 2-per-row
			if (row==0) {
				n=2;
				span = "<div class='span6'>";
			} else {
				n=3;
				span = "<div class='span4'>";
			}
		} else if (num%3==0) {
			n = 3;
			span = "<div class='span4'>"
		} else {}

		// loop through row and create innerHTML for each element
		for (i=0; i<n; i++) {
			var elem = shown[count];
			str += span;
			str += "<div class='experience' name='"+elem.getAttribute("name")+"' order='"+elem.getAttribute("order")+"'>";
			str += elem.innerHTML;
			str += "</div></div>";
			count+=1;
		}
		str += "</div>";
		fullstr += str;
	}

	// loop through hidden elements and add them as hidden, or we'll never be able to find them again
	for (i=0; i<hidden.length; i++) {
		var elem = hidden[i];
		fullstr += "<div class='experience' name="+elem.getAttribute("name")+" order="+elem.getAttribute("order")+" style='display: none;'>"+elem.innerHTML + "</div>";
	}
	// set the new exp block HTML!
	sec.innerHTML=fullstr;
}
