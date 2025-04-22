const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// مشخصات کلی
const LocationInfoSchema = new Schema({
    neighborhood: {type: String, index: true}, // محله
    basijResistanceBase: String, // حوزه مقاومت بسیج
    city: {type: String, index: true}, // شهر
    county: {type: String, index: true}, // شهرستان
    province: {type: String, index: true} // استان
}, {_id: false});

// مذهب - درصد/تعداد Mixed
const ReligionSchema = new Schema({
    religion: String, // مذهب (e.g., "اسلام-شیعه")
    percentage: Schema.Types.Mixed // درصد یا تعداد (e.g., "95%", 95, "3 خانوار", "3000")
}, {_id: false});

// قومیت - تعداد خانوار Mixed
const EthnicitySchema = new Schema({
    ethnicity: String, // قومیت (e.g., "بومی استان", "افغان")
    householdCount: Schema.Types.Mixed // تعداد خانوار / وضعیت (e.g., "25 خانوار", 6, "?", "-")
}, {_id: false});

// امکانات - Q10
const FacilitiesSchema = new Schema({
    mosque: String,
    hosseinieh: String,
    school: String,
    clinicOrHealthHouse: String,
    pharmacy: String,
    sportsFieldOrGym: String,
    localPark: String,
    scholarsHouse: String,
    pipedWaterNetwork: String,
    streetLighting: String,
    parkLighting: String,
    publicTransport: String,
    cityGasNetwork: String,
    curbs: String,
    streetAsphalt: String,
    policeStation: String,
    basijPatrols: String,
    sewageSystem: String,
    wasteCollection: String,
    unusedLand: String,
    library: String,
    cityCameras: String,
    charityInstitution: String,
    nearbyShoppingCenters: String,
    counselingCenter: String,
    karamatHQOffice: String,
}, {_id: false});

// وضعیت ملکی منازل - درصد Mixed
const PropertyStatusSchema = new Schema({
    status: String, // وضعیت (e.g., "دارای سند", "قولنامه ای")
    percentage: Schema.Types.Mixed // درصد یا توضیح (e.g., 80, "اسناد دست شرکت...")
}, {_id: false});

// نیازمندان - Q14 - بیشتر فیلدها Mixed
const NeedyPeopleSchema = new Schema({
    familiesNeedingAidPackages: String,
    familiesNeedingBillPayments: Schema.Types.Mixed,
    familiesWithAddictedHead: Schema.Types.Mixed,
    needyPatientsWithSpecialNeeds: Schema.Types.Mixed,
    disabledResidents: Schema.Types.Mixed,
    elderlyNeedingAid: {
        male: Schema.Types.Mixed,
        female: Schema.Types.Mixed
    },
    elderlyFemaleHeadedHouseholds: Schema.Types.Mixed,
    nonElderlyFemaleHeadedHouseholdsNoJob: Schema.Types.Mixed,
    totalFemaleHeadedHouseholds: Schema.Types.Mixed
}, {_id: false});

// امنیت - Q15
const SecuritySchema = new Schema({
    feelingOfInsecurity: String,
    worryAboutBurglars: String,
    worryAboutMuggingOrStrayDogs: String,
    streetBrawls: String,
    worryAboutFamilyVulnerability: String,
    thugsHangout: String,
    peopleMovingOut: String
}, {_id: false});

// اعتیاد - Q16 - بیشتر فیلدها Mixed
const AddictionSchema = new Schema({
    familiesAffectedByAddiction: Schema.Types.Mixed,
    nonPublicAddictsInfo: String,
    publicAddictsInfo: String,
    drugDistributorCount: Schema.Types.Mixed,
    alcoholDistributorCount: Schema.Types.Mixed,
    distributionHotspotCount: Schema.Types.Mixed,
    rehabCampExists: String
}, {_id: false});

// وضعیت فرهنگی مذهبی - Q17 - بیشتر فیلدها Mixed
const ReligiousCultureSchema = new Schema({
    religiousGroupsCount: Schema.Types.Mixed,
    homeBasedReligiousCeremonies: String,
    congregationalPrayersAttendees: Schema.Types.Mixed,
    residentClericsCount: Schema.Types.Mixed,
    largeScaleCelebrationsMourning: String,
    activeClericsCount: Schema.Types.Mixed,
    activeMaddahsCount: Schema.Types.Mixed,
    activeFemaleSessionLeadersCount: Schema.Types.Mixed,
    participationInRalliesElections: String,
    martyrsCount: Schema.Types.Mixed,
    residentMartyrFamiliesInfo: Schema.Types.Mixed,
    veteransCount: Schema.Types.Mixed,
    isargaranCount: Schema.Types.Mixed,
    freedPowCount: Schema.Types.Mixed,
    hijabObservancePercentage: String
}, {_id: false});

// آسیب های اجتماعی - اولویت Mixed
const SocialHarmSchema = new Schema({
    harmTitle: String,
    statusOrStats: String,
    priority: Schema.Types.Mixed
}, {_id: false});

// معتمدین محله - Q19 - ردیف Mixed
const TrustedPersonSchema = new Schema({
    row: Schema.Types.Mixed,
    name: String,
    job: String,
    phoneNumber: String,
    hasContact: String,
    contactFrequency: String
}, {_id: false});

// ظرفیت های محله - Q21 - ردیف Mixed
const NeighborhoodCapacitySchema = new Schema({
    row: Schema.Types.Mixed,
    capacity: String,
    description: String
}, {_id: false});

// مساجد - Q22
const MosqueSchema = new Schema({
    name: String,
    prayersHeld: String,
    clericInfo: String,
    boardChairmanInfo: String,
    charityAffiliation: String,
    culturalCenterAffiliation: String,
    basijBaseAffiliation: String,
    publicTurnout: String,
    buildingCondition: String,
    cooperationWithCouncil: String
}, {_id: false});

// پایگاه های بسیج - Q23 - ردیف Mixed
const BasijBaseSchema = new Schema({
    row: Schema.Types.Mixed,
    name: String,
    gender: String,
    commanderInfo: String, // نام فرمانده
    commanderPhone: String, // شماره فرمانده
    isResident: String,
    activityLevel: String,
    locatedInMosque: String,
    cooperationWithCouncil: String
}, {_id: false});

// مدارس - Q24 - ردیف و فیلدهای دانش آموزان Mixed
const SchoolSchema = new Schema({
    row: Schema.Types.Mixed,
    name: String,
    gender: String,
    principalInfo: String,
    principalPhone: String,
    students: {
        boys: Schema.Types.Mixed,
        girls: Schema.Types.Mixed,
        iranian: Schema.Types.Mixed,
        foreign: Schema.Types.Mixed,
        total: Schema.Types.Mixed
    },
    buildingCondition: String,
    address: String,
    cooperationLevel: String
}, {_id: false});

// مجموعه های فرهنگی - Q26
const CulturalCenterSchema = new Schema({
    row: Number,
    name: String, // نام مجموعه
    manager: String, // مدیر
    mobile: String, // تلفن همراه
    address: String,
    phone: String,
    specialty: String,
    cooperation: String // همراهی
}, {_id: false});

// اماکن قابل بهره برداری - Q27 (ساختار آرایه‌ای) - ردیف Mixed
const PlaceCapacitySchema = new Schema({
    row: Schema.Types.Mixed,
    location: String, // مکان
    field: String, // عرصه
    description: String, // توضیحات
    usage: String // استفاده
}, {_id: false});

// پروژه‌ها - Q28, Q29, Q30 - ردیف Mixed
const ProjectSchema = new Schema({
    row: Schema.Types.Mixed,
    projectName: String,
    responsibleBody: String,
    description: String
}, {_id: false});

// کارگروه ها - Q31 - ردیف Mixed
const WorkgroupSchema = new Schema({
    row: Schema.Types.Mixed,
    workgroupName: String,
    responsiblePerson: String,
    phoneNumber: String,
    hasDecree: String,
    isBasiji: String,
    description: String
}, {_id: false});

// مسائل محله / محرومیت - Q32 (ساختار آیتم برای Samples 1 & 2) - ردیف Mixed
const NeighborhoodIssueItemSchemaV2 = new Schema({
    row: Schema.Types.Mixed,
    title: String, // عنوان محرومیت
    level: String, // میزان
    description: String // توضیحات
}, {_id: false});

// تفاهم نامه - Q33 - ردیف Mixed
const AgreementSchema = new Schema({
    row: Schema.Types.Mixed,
    organization: String,
    field: String,
    agreementSubject: String,
    description: String
}, {_id: false});

// تحلیل محله - Q34
const NeighborhoodAnalysisSchema = new Schema({
    strengths: String,
    weaknesses: String,
    capacities: String,
    implementationSuggestion: String,
    needs: String,
    prerequisites: String
}, {_id: false});

// مراکز دسترسی - Q35 - ردیف Mixed
const AccessCenterSchema = new Schema({
    row: Schema.Types.Mixed,
    centerName: String,
    organization: String,
    address: String,
    description: String,
    utilization: String
}, {_id: false});

// نقاط چالشی - Q36
const ChallengePointSchema = new Schema({
    row: Number,
    location: String,
    challengeType: String,
    description: String
}, {_id: false});

// زمین های بایر - Q37 (ساختار آیتم برای Samples 2, 4) - ردیف Mixed
const WastelandItemSchema = new Schema({
    row: Schema.Types.Mixed,
    location: String,
    address: String,
    owner: String,
    harmType: String,
    description: String
}, {_id: false});

// اصناف - Q38 - ردیف Mixed
const GuildSchema = new Schema({
    row: Schema.Types.Mixed,
    guildType: String,
    description: String,
    utilization: String
}, {_id: false});

// کارگاه های اشتغالزایی - Q39 (ساختار آیتم) - ردیف و تعداد شاغل Mixed
const WorkshopSchema = new Schema({
    row: Schema.Types.Mixed,
    manager: String,
    workshopType: String,
    phone: String,
    employeeCount: Schema.Types.Mixed,
    activityType: String,
    description: String,
    utilization: String
}, {_id: false});

// Schema for Q3 Population (structured version)
const PopulationDetailSchema = new Schema({
    totalPopulation: Schema.Types.Mixed, // String or Number
    residentHouseholds: {
        iranian: Schema.Types.Mixed,
        foreign: Schema.Types.Mixed
    },
    populationBreakdown: {
        iranianMen: Schema.Types.Mixed,
        iranianWomen: Schema.Types.Mixed,
        foreignNationals: Schema.Types.Mixed,
        minorities: Schema.Types.Mixed
    },
    ageBreakdown: [{
        group: String,
        female: Schema.Types.Mixed,
        male: Schema.Types.Mixed
    }]
}, {_id: false});

// Schema for Q4 Deviant Sects (structured version)
const DeviantSectInfoSchema = new Schema({
    sectName: String // نام فرقه
    , secNumber: String //تعداد پیروان
    , secInfo: String // وضیحات فرقهت

}, {_id: false});

// Schema for Q8 Boundaries (structured version)
const BoundariesSchema = new Schema({
    north: String,
    south: String,
    east: String,
    west: String
}, {_id: false});

// Schema for Q9 physicalCondition (structured version)
const PhysicalConditionSchema = new Schema({
    description: String,
    percentage: Schema.Types.Mixed // درصد یا تعداد (e.g., "95%", 95, "3", "3000")
}, {_id: false});

// Schema for Q25 Educational Status (structured version)
const EducationStatusSchema = new Schema({
    studying: Schema.Types.Mixed, // Object with levels
    graduated: Schema.Types.Mixed, // Object with levels
    studentMaritalStatusGender: Schema.Types.Mixed // Object {متاهل:.., مجرد:..}
}, {_id: false});

// Schema for Q27 Graduates/Place Capacity (object version - Sample 5)
const GraduatesCapacitySchema = new Schema({
    capacityExists: String,
    capacityUsage: String,
}, {_id: false});


const DetailedQuestionnaireSchema = new Schema({
    // --- General Info ---
    generalInfo: LocationInfoSchema,

    // --- Q1: Aerial Map ---
    q1_aerialMapProvided: String,

    // --- Q2: Neighborhood Details ---
    q2_neighborhoodDetails: {
        oldName: String,
        newName: String,
        detail: String
    },

    // --- Q3: Population ---
    q3_population_structured: PopulationDetailSchema,

    // --- Q4: Religion ---
    q4_religion: {
        distribution: [ReligionSchema],
        deviantSectsInfo_structured: DeviantSectInfoSchema,
        deviantSectsInfo_text: String
    },

    // --- Q5: Ethnicity ---
    q5_ethnicities_list: [EthnicitySchema],

    // --- Q6: Neighborhood Location Type ---
    q6_locationType: [String],

    // --- Q7: Geographical Direction ---
    q7_direction: String,

    // --- Q8: Boundaries / Neighbors ---
    q8_boundaries_structured: BoundariesSchema,
    q8_boundaries_text: String,

    // --- Q9: Physical Condition / Streets ---
    q9_physicalCondition: [PhysicalConditionSchema],

    // --- Q10: Facilities ---
    q10_facilities: FacilitiesSchema,

    // --- Q11 to Q13: Specific Features ---
    q11_hasCrypts: String,
    q12_hasMountainsValleys: String,
    q13_hasQanatsWells: String,

    // --- Property Status ---
    propertyStatus: [PropertyStatusSchema],

    // --- Q14: Needy People ---
    q14_needyInfo: NeedyPeopleSchema,

    // --- Q15: Security Perception ---
    q15_securityInfo: SecuritySchema,

    // --- Q16: Addiction Issues ---
    q16_addictionInfo: AddictionSchema,

    // --- Q17: Religious and Cultural Status ---
    q17_religiousCulturalInfo: ReligiousCultureSchema,

    // --- Q18 & Others: Social Harms ---
    socialHarms: [SocialHarmSchema],

    // --- Q19: Trusted Individuals ---
    q19_trustedIndividuals: [TrustedPersonSchema],

    // --- Q20: Customs and Traditions ---
    q20_customs: {
        partA: String,
        partB: String
    },

    // --- Q21: Neighborhood Capacities ---
    q21_neighborhoodCapacities: [NeighborhoodCapacitySchema],

    // --- Q22: Mosques ---
    q22_mosques: [MosqueSchema],

    // --- Q23: Basij Bases ---
    q23_basijBases: [BasijBaseSchema],

    // --- Q24: Schools ---
    q24_schools: [SchoolSchema],

    // --- Q25: Educational Status ---
    q25_educationalStatus_structured: EducationStatusSchema,

    // --- Q26: Cultural Centers ---
    q26_culturalCenters_list: [CulturalCenterSchema],

    // --- Q27: Graduates/Place Capacity ---
    q27_places_list: [PlaceCapacitySchema],
    q27_capacity_object: [GraduatesCapacitySchema],

    // --- Q28: Ongoing Projects ---
    q28_ongoingProjects_list: [ProjectSchema],

    // --- Q29: Unfinished Projects ---
    q29_unfinishedProjects_list: [ProjectSchema],

    // --- Q30: Needed Projects ---
    q30_neededProjects_list: [ProjectSchema],

    // --- Q31: Workgroups ---
    q31_workgroups: [WorkgroupSchema],

    // --- Q32: Neighborhood Issues ---
    q32_issues_list_v1: [NeighborhoodIssueItemSchemaV2],

    // --- Q33: Agreements ---
    q33_agreements_list: [AgreementSchema],

    // --- Q34: Neighborhood Analysis ---
    q34_analysis_list: [NeighborhoodAnalysisSchema],

    // --- Q35: Access Centers ---
    q35_centers_list: [AccessCenterSchema],

    // --- Q36: Challenging Points ---
    q36_points_list: [ChallengePointSchema],

    // --- Q37: Wasteland Info ---
    q37_wasteland_list: [WastelandItemSchema],

    // --- Q38: Guilds / Local Businesses ---
    q38_guilds_list: [GuildSchema],

    // --- Q39: Entrepreneurship Workshops ---
    q39_workshops_list: [WorkshopSchema],
    q39_workshops_text: String,

    // --- Q40: Administrative Problems / General Description ---
    q40_administrativeProblems: String,

    // --- Optional Metadata ---
    sourceQuestionnaireId: String,
    metadata: {
        entryDate: Date,
        enteredBy: String,
    }

}, {
    timestamps: true,
});

DetailedQuestionnaireSchema.index({"generalInfo.province": 1, "generalInfo.county": 1, "generalInfo.city": 1});
DetailedQuestionnaireSchema.index({"generalInfo.neighborhood": 1});


const DetailedQuestionnaire = mongoose.model('DetailedQuestionnaire', DetailedQuestionnaireSchema, 'detailed_questionnaires');

module.exports = DetailedQuestionnaire;