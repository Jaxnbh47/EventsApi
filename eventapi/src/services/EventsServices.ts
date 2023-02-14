export interface Events {
    name:             string;
    type:             EventType;
    id:               string;
    test:             boolean;
    url:              string;
    locale:           Locale;
    images:           Image[];
    sales:            Sales;
    dates:            Dates;
    classifications:  Classification[];
    promoter?:        Promoter;
    promoters?:       Promoter[];
    info?:            string;
    pleaseNote?:      string;
    priceRanges?:     PriceRange[];
    products?:        Product[];
    seatmap:          Seatmap;
    accessibility?:   Accessibility;
    ticketLimit?:     TicketLimit;
    ageRestrictions?: AgeRestrictions;
    ticketing?:       Ticketing;
    _links:           EventLinks;
    _embedded:        EventEmbedded;
    outlets?:         Outlet[];
}

export interface EventEmbedded {
    venues:      Venue[];
    attractions: Attraction[];
}

export interface Attraction {
    name:            string;
    type:            AttractionType;
    id:              string;
    test:            boolean;
    url:             string;
    locale:          Locale;
    externalLinks?:  ExternalLinks;
    aliases?:        string[];
    images:          Image[];
    classifications: Classification[];
    upcomingEvents:  { [key: string]: number };
    _links:          AttractionLinks;
}

export interface AttractionLinks {
    self: First;
}

export interface First {
    href: string;
}

export interface Classification {
    primary:  boolean;
    segment:  Genre;
    genre:    Genre;
    subGenre: Genre;
    type?:    Genre;
    subType?: Genre;
    family:   boolean;
}

export interface Genre {
    id:   string;
    name: string;
}

export interface ExternalLinks {
    twitter?:     Facebook[];
    wiki?:        Facebook[];
    facebook:     Facebook[];
    instagram?:   Facebook[];
    homepage:     Facebook[];
    youtube?:     Facebook[];
    itunes?:      Facebook[];
    lastfm?:      Facebook[];
    spotify?:     Facebook[];
    musicbrainz?: Musicbrainz[];
}

export interface Facebook {
    url: string;
}

export interface Musicbrainz {
    id: string;
}

export interface Image {
    ratio:        Ratio;
    url:          string;
    width:        number;
    height:       number;
    fallback:     boolean;
    attribution?: string;
}

export enum Ratio {
    The16_9 = "16_9",
    The3_2 = "3_2",
    The4_3 = "4_3",
}

export enum Locale {
    EnUs = "en-us",
}

export enum AttractionType {
    Attraction = "attraction",
}

export interface Venue {
    name:                     string;
    type:                     VenueType;
    id:                       string;
    test:                     boolean;
    url?:                     string;
    locale:                   Locale;
    images?:                  Image[];
    postalCode:               string;
    timezone:                 string;
    city:                     City;
    state:                    State;
    country:                  Country;
    address:                  Address;
    location:                 Location;
    markets?:                 Genre[];
    dmas:                     DMA[];
    boxOfficeInfo?:           BoxOfficeInfo;
    parkingDetail?:           string;
    accessibleSeatingDetail?: string;
    generalInfo?:             GeneralInfo;
    upcomingEvents:           UpcomingEvents;
    _links:                   AttractionLinks;
    ada?:                     Ada;
    social?:                  Social;
}

export interface Ada {
    adaPhones:     string;
    adaCustomCopy: string;
    adaHours:      string;
}

export interface Address {
    line1: string;
}

export interface BoxOfficeInfo {
    phoneNumberDetail:      string;
    openHoursDetail:        string;
    acceptedPaymentDetail?: string;
    willCallDetail?:        string;
}

export interface City {
    name: string;
}

export interface Country {
    name:        CountryName;
    countryCode: CountryCode;
}

export enum CountryCode {
    Us = "US",
}

export enum CountryName {
    UnitedStatesOfAmerica = "United States Of America",
}

export interface DMA {
    id: number;
}

export interface GeneralInfo {
    generalRule?: string;
    childRule?:   string;
}

export interface Location {
    longitude: string;
    latitude:  string;
}

export interface Social {
    twitter: Twitter;
}

export interface Twitter {
    handle: string;
}

export interface State {
    name:      string;
    stateCode: string;
}

export enum VenueType {
    Venue = "venue",
}

export interface UpcomingEvents {
    _total:       number;
    ticketmaster: number;
    _filtered:    number;
    tmr?:         number;
}

export interface EventLinks {
    self:        First;
    attractions: First[];
    venues:      First[];
}

export interface Accessibility {
    ticketLimit?: number;
    info?:        string;
}

export interface AgeRestrictions {
    legalAgeEnforced: boolean;
}

export interface Dates {
    start:            Start;
    timezone?:        string;
    status:           Status;
    spanMultipleDays: boolean;
}

export interface Start {
    localDate:      string;
    localTime:      string;
    dateTime:       string;
    dateTBD:        boolean;
    dateTBA:        boolean;
    timeTBA:        boolean;
    noSpecificTime: boolean;
}

export interface Status {
    code: Code;
}

export enum Code {
    Onsale = "onsale",
}

export interface Outlet {
    url:  string;
    type: string;
}

export interface PriceRange {
    type:     PriceRangeType;
    currency: Currency;
    min:      number;
    max:      number;
}

export enum Currency {
    Usd = "USD",
}

export enum PriceRangeType {
    Standard = "standard",
}

export interface Product {
    name:            string;
    id:              string;
    url:             string;
    type:            ProductType;
    classifications: Classification[];
}

export enum ProductType {
    Parking = "Parking",
    SpecialEntry = "Special Entry",
    Upsell = "Upsell",
}

export interface Promoter {
    id:          string;
    name:        PromoterName;
    description: Description;
}

export enum Description {
    LiveNationMusicNtlUsa = "LIVE NATION MUSIC / NTL / USA",
    LiveNationNoLnConcertsBrandingNtlUsa = "LIVE NATION - NO LN CONCERTS BRANDING / NTL / USA",
    NbaRegularSeasonNtlUsa = "NBA REGULAR SEASON / NTL / USA",
    PromotedByVenueNtlUsa = "PROMOTED BY VENUE / NTL / USA",
}

export enum PromoterName {
    LiveNationMusic = "LIVE NATION MUSIC",
    LiveNationNoLnConcertsBranding = "LIVE NATION - NO LN CONCERTS BRANDING",
    NbaRegularSeason = "NBA REGULAR SEASON",
    PromotedByVenue = "PROMOTED BY VENUE",
}

export interface Sales {
    public:    Public;
    presales?: Presale[];
}

export interface Presale {
    startDateTime: string;
    endDateTime:   string;
    name:          string;
    description?:  string;
}

export interface Public {
    startDateTime: string;
    startTBD:      boolean;
    startTBA:      boolean;
    endDateTime:   string;
}

export interface Seatmap {
    staticUrl: string;
}

export interface TicketLimit {
    info: string;
}

export interface Ticketing {
    safeTix: SafeTix;
}

export interface SafeTix {
    enabled: boolean;
}

export enum EventType {
    Event = "event",
}

export interface EventsSerivcesLinks {
    first: First;
    self:  First;
    next:  First;
    last:  First;
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}
