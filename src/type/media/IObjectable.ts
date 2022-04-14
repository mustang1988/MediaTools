export interface IObjectSerializable {
    /**
     * Transform the object to a simple JSON object
     */
    toObject(): object;
}