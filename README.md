UnPlugged-Controls Android Camera Weirdness
=====================


A copy of the current stable (3.2, as pulled from GitHub) UnPlugged-Controls nsf, modified for the UnpDemoFormEditor XPage to include an xp:fileUpload for image upload to demonstrate what it's doing.


Situation
---------

When accessing a form in a properly compiled XPage, the Android UnPlugged client app is, instead of loading the image for upload, redirecting the user to a page with just a numeric name of the image. I've gone over it a few times and feel this can't be right. This page works correctly from the same Android mobile device, via the native web browser (or Chrome). This works as expected from iOS Mobile Safari and inside the iOS client UnPlugged app.

The form (attached to the "new" button) is the UnpDemoFormEditor XPage, modified as follows:

Immediately below the Details xp:inputTextarea, there is another list item, containing a label and xp:fileUpload. This control follows the information [outlined in this YouTube video](https://www.youtube.com/watch?v=dITMq2eDzcE), which is regarded as current information [per this comment by Rich Sharpe](https://github.com/unplugged/unplugged-controls/issues/346#issuecomment-32199333). The XSP for that entire list item is below.

    <li>
    	<xp:label value="Image" id="imageLabel1" for="imageFileUpload1"></xp:label>
    	<xp:fileUpload id="imageFileUpload1">
    		<xp:this.attrs>
    			<xp:attr
    				name="capture"
    				value="true">
    			</xp:attr>
    			<xp:attr
    				name="accept"
    				value="image/*;capture=camera">
    			</xp:attr>
    		</xp:this.attrs>
    	</xp:fileUpload>
    	<xp:panel
    		style="height:160px;width:100%;background-color:white"
    		disableOutputTag="true"
    		rendered="${javascript:!document1.getAttachmentList('Image').isEmpty()}">
    
    		<xp:repeat
    			id="repeat1" rows="30"
    			value="${javascript:document1.getAttachmentList('Image')}"
    			var="attList" indexVar="attIndex">
    			<xp:image
    				url="#{javascript:'0/'+document1.getDocument().getUniversalID()+'/$File/'+document1.getAttachmentList('Image').get(attIndex).getName()}"
    				id="attImage"
    				style="display:block;margin-left:auto;margin-right:auto;max-height:160px;max-width:300px;">
    			</xp:image>
    		</xp:repeat>
    	</xp:panel>
    </li>
