"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Property {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toJSON() {
        return { name: this._name };
    }
}
exports.Property = Property;
//# sourceMappingURL=property.js.map