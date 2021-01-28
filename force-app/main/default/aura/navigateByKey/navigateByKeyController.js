({
	doInit : function(component, event, helper) {   
        addEventListener('keydown', function(event){

            if (component.get("v.disabled") === true)
                return;

            var navigate = component.get('v.navigateFlow');

            try {
                
                if (component.get("v.useCode") === true) {

                    // Using event.code by default
                    if (component.get('v.nextKey') != null && event.code === component.get('v.nextKey'))
                        navigate("NEXT");

                    if (component.get('v.previousKey') != null && event.code === component.get('v.previousKey'))
                        navigate("BACK"); 
    
                    if (component.get('v.finishKey') != null && event.code === component.get('v.finishKey'))
                        navigate("FINISH");

                } else if (component.get("v.useKey") === true) {

                    // Using event.key
                    if (component.get('v.nextKey') != null && event.key === component.get('v.nextKey'))
                        navigate("NEXT");

                    if (component.get('v.previousKey') != null && event.key === component.get('v.previousKey'))
                        navigate("BACK"); 

                    if (component.get('v.finishKey') != null && event.key === component.get('v.finishKey'))
                        navigate("FINISH");

                } else if (component.get("v.useKeyCode") === true) {

                    // IE compatible mode
                    if (component.get('v.nextKey') != null && event.keyCode === parseInt(component.get('v.nextKey')))
                        navigate("NEXT");
    
                    if (component.get('v.previousKey') != null && event.keyCode === parseInt(component.get('v.previousKey')))
                        navigate("BACK"); 
    
                    if (component.get('v.finishKey') != null && event.keyCode === parseInt(component.get('v.finishKey')))
                        navigate("FINISH"); 
                }


            } catch (err) {
                console.log('Navigation Error from navigateByKey');
            }            

        });
    //Do something else in init
},
    //Next Function
})
