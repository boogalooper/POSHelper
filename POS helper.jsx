/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource> 
<name>POS helper</name> 
<eventid>5e8d016e-b5d9-46e8-ab14-d2f9f24db20a</eventid>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

#target photoshop
(function () {
var s2t = stringIDToTypeID;
if (playbackParameters.hasKey(s2t('target'))) {
    var args = playbackParameters.getString(s2t('target'));
    var scriptArgs = playbackParameters.hasKey(s2t('scriptArgs'))
        ? playbackParameters.getString(s2t('scriptArgs')) : '';
    if (args.length) POSHelper(args, scriptArgs);
}


function POSHelper(arg, scriptArgs) {
    if (arg.indexOf('.atn') > 0) {
        while (true) {
            (r = new ActionReference()).putIndex(s2t("actionSet"), 1);
            (d = new ActionDescriptor()).putReference(s2t("null"), r);
            try { executeAction(s2t("delete"), d, DialogModes.NO) } catch (e) { break }
        }
        app.load(new File(arg))
    } else if (!isUUIDv4(arg)) {
        app.load(new File(arg))
    } else {
        var desc = new ActionDescriptor();
        if (scriptArgs) desc.putString(s2t('args'), scriptArgs);
        // Do not expose the forwarding command parameters to the target script.
        app.playbackParameters = desc;
        executeAction(s2t(arg), desc, DialogModes.NO);
    }
}

function isUUIDv4(s) {
    var uuidV4Re = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidV4Re.test(s);
}
})();
