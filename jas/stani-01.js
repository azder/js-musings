
/**
 * Created by azder on 2014-07-04.
 */

(function () {

    var jas = this, mome = require('mome.js');

    mome
    .stani()
    .then(function () {
        return mome.igraj();
    })
    .then(function () {

        jas
        .gledaj(mome)
        .then(function () {
            jas.vesel(true);
        });

    });


}());


