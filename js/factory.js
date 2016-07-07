
app.factory("bootFactory", function() {

  return {  
 treeviewer: function(Data) {
	         var $tree = $('#treeview').treeview({
				      levels: 1, // change the level to Expanded Tree 1 to 99
					  expandIcon: 'glyphicon glyphicon-folder-close', // change Expand glyphicon
					  collapseIcon: 'glyphicon glyphicon-folder-open', // change collapse glyphicon
					  nodeIcon: '',  // use icon for tree node,same icon will repeat of all the nodes 
					  color: "#000",  // color for node icon & text
					  backColor: "#e7e7e7",  
					  onhoverColor: "#12A3DB",
					  borderColor: "#12A3DB",
					  showBorder: true,
					  showTags: true,
					  highlightSelected: true,
					  selectedColor: "#fff",
					  selectedBackColor: "#12A3DB",	
					  enableLinks: true,					  
                      data: Data
                        });
                     return $tree;
            },
			
 treeviewer1: function(Data) {
        var $checkableTree = $('#treeview-checkable').treeview({
          data: Data,
		  levels: 1,
          showIcon: false,
          showCheckbox: true,
          onNodeChecked: function(event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
          },
          onNodeUnchecked: function (event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
          }
        });

		return $checkableTree;
            }
			
        };
});		