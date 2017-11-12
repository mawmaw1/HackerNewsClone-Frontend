const UNIT = {
    MS: 1,
    S: 1000,
    M: 1000 * 60,
    H: 1000 * 60 * 60,
    D: 1000 * 60 * 60 * 24,
    Mo: 1000 * 60 * 60 * 24 * 30,
    Y: 1000 * 60 * 60 * 24 * 365
};



function Time(ms){
    this.ms = ms;
    init.call(this);
}

Time.prototype.highestUnitToString = function(){

    return  this.years > 0      ? `${this.years} year${this.years > 1 ? 's' : ''}`      :
            this.months > 0     ? `${this.months} month${this.months > 1 ? 's' : ''}`    :
            this.days > 0       ? `${this.days} day${this.days > 1 ? 's' : ''}`        :
            this.hours > 0      ? `${this.hours} hour${this.hours > 1 ? 's' : ''}`      :
            this.minutes > 0    ? `${this.minutes} minute${this.minutes > 1 ? 's' : ''}`  :
            this.seconds > 0    ? `${this.seconds} second${this.seconds > 1 ? 's' : ''}`
                                : this.ms


};

function init(){
    this.seconds = getRoundedUnitValue.call(this, UNIT.S);
    this.minutes = getRoundedUnitValue.call(this, UNIT.M);
    this.hours = getRoundedUnitValue.call(this, UNIT.H);
    this.days = getRoundedUnitValue.call(this, UNIT.D);
    this.months = getRoundedUnitValue.call(this, UNIT.Mo);
    this.years = getRoundedUnitValue.call(this, UNIT.Y);
}

function getRoundedUnitValue(unit){
    return unit > this.ms   ? 0
                            : Math.round(this.ms / unit);
}

module.exports = Time;