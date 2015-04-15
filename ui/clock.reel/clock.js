/**
 * @module ui/clock.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Clock
 * @extends Component
 */
exports.Clock = Component.specialize(/** @lends Clock# */ {
    constructor: {
        value: function Clock() {
            this.super();
        }
    }
});
