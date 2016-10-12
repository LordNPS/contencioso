var dbAireclaim = require('../db/importDBJSON.js');
var findByAID = function(aid){
    return dbAireclaim.find((item)=>{
        return new RegExp(aid).test(item.aireclaimID);
    })
};
module.exports = function NEBInfo(id,options){
    if(arguments.lenght<2| options.idType=="aireclaimID" ){
        var tuplo = findByAID(id);
    }
    if(!tuplo){
        return null;
    }
    //Implementar Lookup de alias
    this.passengerMain = tuplo.passengerMain;
    this.adultNumber = tuplo.childrenNumber;
    this.booking = tuplo.booking;
    this.cancellationNotice = tuplo.cancellationNotice;
    this.alternative = tuplo.offerAlternative;
    this.airline=tuplo.airlineName;
    this.flightNumber = tuplo.flightRef;
    this.airportDeparture = tuplo.flightOrigin;
    this.airportArrival = tuplo.flightDestination;
    this.dateOfFlight = tuplo.flightDate;
    this.airportIncident = tuplo.flightOrigin;
    this.confirmedYES = true;
    this.condirmedNO = false;
    this.timelyYES=true;
    this.timelyNO = false;
    this.timelyGateYES = true;
    this.timelyGateNO = false;
    this.informationRightsYES = false;
    this.informationRightsNO = true;
    if(tuplo.hasDelay){
        this.longDelayMain = true;
        this.delay={
            assistanceAirlineYES: false,
            assistanceMeals: false,
            assistanceRefreshments: false,
            assistanceAccomodation: false,
            assistanceTransfer: false,
            assistanceCommunication: false,
            assistanceOther: false,
            assistanceNO: true,
            flightPurposeYES: true,
            flightPurposeNO: false,
            flightPurposeAlternativeYES: false,
            flightPurposeAlternativeNO: true,
            flightRefundYES: false,
            flightRefundWhole: false,
            flightRefundCoupons: false,
            flightRefundNo: true
        }
    }
    if(tuplo.hasCancellation){
        this.cancellationMain = true;
        this.cancellation ={
            cancelInformedAfterArrival: true,
            cancelInformedBeforeArrival: false,
            cancelInformedLess1Week: false,
            cancelInformedLess2weeks: false,
            cancelInformedMore2Weeks: false,
            cancelAlternativeYES: false,
            cancelAlternativeNO: false,
            cancelInformedReasonYES: false,
            cancelInformedReasonNO: true,
            cancelAssistanceAirlineYES: false,
            cancelAssistanceMeals: false,
            cancelAssistanceRefreshments: false,
            cancelAssistanceAccomodation: false,
            cancelAssistanceTransfer: false,
            cancelAssistanceCommunication: false,
            cancelAssistanceOther: false,
            cancelAssistanceNO: true,
            cancelFinancialCompensationYES: false,
            cancelFinancialCompensationNO: true,
            cancelChoiceYES: false,
            cancelChoiceRefund: false,
            cancelRefundWhole: false,
            cancelRefundCoupons: false,
            cancelChoiceRerouting: false,
            cancelChoiceNO: true,
            cancelOnlyRefund: true,
            cancelOnlyRerouting: false
        }
    }
    if(tuplo.hasDenial){
        this.deniedBoardingMain = true;
        this.deniedBoarding = {
            volunteersCallYES: false,
            volunteersCallNO: false,
            volunteersCallDunno: true,
            volunteerYES: false,
            volunteerNO: true,
            rightfulRefuseYES: false,
            rightfulRefuseNO: true,
            rightfulRefuseDunno: false,
            ponctualYES: true,
            ponctualNO: false,
            deniedAssistanceAirlineYES: false,
            deniedAssistanceMeals: false,
            deniedAssistanceRefreshments: false,
            deniedAssistanceAccomodation: false,
            deniedAssistanceTransfer: false,
            deniedAssistanceCommunication: false,
            deniedAssistanceOther: false,
            deniedAssistanceNO: true,
            deniedFinancialCompensationYES: false,
            deniedFinancialCompensationNO: true,
            deniedChoiceYES: false,
            deniedChoiceRefund: false,
            deniedRefundWhole: false,
            deniedRefundCoupons: false,
            deniedChoiceRerouting: false,
            deniedChoiceNO: true,
            deniedOnlyRefund: true,
            deniedOnlyRerouting: false
        }
    }
    if(tuplo.hasDowngrading){
        this.downgradingMain = true;
        this.downgrading = {
            reservationFirstClass: true,
            reservationBusinessClass: false,
            travelBusinessClass: false,
            travelEconomyClass: false,
            donwgradingRefundYES: false,
            downgradingRefundNO: true

        }
    }
}
