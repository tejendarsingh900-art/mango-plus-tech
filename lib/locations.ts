export type LocationCountry='india'|'usa';
export type LocationGroup='Delhi NCR'|'Tier-1 Metro Hubs'|'Tier-2 High-Growth Industrial Hubs'|'Major High-Paying Hubs'|'Low-Competition / Fast-Growing Hubs';

export type LocationMarket={
 country:LocationCountry;countryName:string;city:string;slug:string;region:string;group:LocationGroup;
 descriptor:string;industries:string[];
};

const india=(city:string,slug:string,region:string,group:LocationGroup,descriptor:string,industries:string[]):LocationMarket=>({country:'india',countryName:'India',city,slug,region,group,descriptor,industries});
const usa=(city:string,slug:string,region:string,group:LocationGroup,descriptor:string,industries:string[]):LocationMarket=>({country:'usa',countryName:'United States',city,slug,region,group,descriptor,industries});

export const locations:LocationMarket[]=[
 india('Gurugram (Gurgaon)','gurugram','Haryana','Delhi NCR','a fast-moving corporate, technology and startup ecosystem',['Technology','SaaS','Professional services','Real estate']),
 india('Noida','noida','Uttar Pradesh','Delhi NCR','a connected technology, media and commercial market',['IT services','Media','E-commerce','Education']),
 india('Faridabad','faridabad','Haryana','Delhi NCR','an established industrial market modernising its digital presence',['Manufacturing','Engineering','Automotive','B2B services']),
 india('Ghaziabad','ghaziabad','Uttar Pradesh','Delhi NCR','a high-growth commercial and residential business corridor',['Manufacturing','Healthcare','Real estate','Retail']),
 india('Greater Noida','greater-noida','Uttar Pradesh','Delhi NCR','an expanding education, industrial and technology destination',['Education','Manufacturing','Technology','Real estate']),
 india('Bengaluru','bengaluru','Karnataka','Tier-1 Metro Hubs','India’s leading product, startup and technology ecosystem',['SaaS','Fintech','Technology','E-commerce']),
 india('Mumbai','mumbai','Maharashtra','Tier-1 Metro Hubs','a high-value finance, media and consumer brand market',['Finance','Media','Retail','Professional services']),
 india('Hyderabad','hyderabad','Telangana','Tier-1 Metro Hubs','a major technology, life-sciences and enterprise hub',['Technology','Life sciences','SaaS','Real estate']),
 india('Pune','pune','Maharashtra','Tier-1 Metro Hubs','a strong software, automotive and education economy',['Software','Automotive','Education','Manufacturing']),
 india('Chennai','chennai','Tamil Nadu','Tier-1 Metro Hubs','an enterprise, automotive and digital services centre',['Automotive','Enterprise IT','Healthcare','Manufacturing']),
 india('Kolkata','kolkata','West Bengal','Tier-1 Metro Hubs','an established eastern business, culture and services market',['Professional services','Retail','Education','Logistics']),
 india('Ahmedabad','ahmedabad','Gujarat','Tier-2 High-Growth Industrial Hubs','a manufacturing, commerce and fast-scaling enterprise hub',['Manufacturing','Textiles','Pharma','E-commerce']),
 india('Indore','indore','Madhya Pradesh','Tier-2 High-Growth Industrial Hubs','a growing technology and central India business hub',['Technology','Education','Retail','Professional services']),
 india('Jaipur','jaipur','Rajasthan','Tier-2 High-Growth Industrial Hubs','a tourism, craft, commerce and startup market',['Tourism','Retail','Jewellery','Technology']),
 india('Surat','surat','Gujarat','Tier-2 High-Growth Industrial Hubs','a globally connected textile, diamond and commerce centre',['Textiles','Jewellery','Manufacturing','Export']),
 india('Coimbatore','coimbatore','Tamil Nadu','Tier-2 High-Growth Industrial Hubs','an engineering, manufacturing and entrepreneurial market',['Engineering','Manufacturing','Textiles','Healthcare']),
 india('Chandigarh / Mohali','chandigarh-mohali','Punjab & Chandigarh','Tier-2 High-Growth Industrial Hubs','a planned business region with a growing IT and services economy',['Technology','Education','Healthcare','Professional services']),
 india('Lucknow','lucknow','Uttar Pradesh','Tier-2 High-Growth Industrial Hubs','a rapidly expanding services, education and consumer market',['Education','Healthcare','Retail','Public services']),
 india('Nagpur','nagpur','Maharashtra','Tier-2 High-Growth Industrial Hubs','a central logistics, infrastructure and emerging IT hub',['Logistics','Infrastructure','Technology','Healthcare']),
 india('Kochi','kochi','Kerala','Tier-2 High-Growth Industrial Hubs','a connected tourism, technology and maritime business centre',['Tourism','Technology','Logistics','Healthcare']),
 india('Visakhapatnam','visakhapatnam','Andhra Pradesh','Tier-2 High-Growth Industrial Hubs','a port-led industrial and growing technology market',['Logistics','Manufacturing','Technology','Tourism']),
 usa('New York City','new-york-city','New York','Major High-Paying Hubs','a global centre for finance, media, commerce and ambitious brands',['Finance','Media','SaaS','Professional services']),
 usa('Los Angeles','los-angeles','California','Major High-Paying Hubs','a creative, entertainment and consumer brand powerhouse',['Entertainment','E-commerce','Media','Wellness']),
 usa('San Francisco','san-francisco','California','Major High-Paying Hubs','a global product, venture and technology ecosystem',['SaaS','AI','Fintech','Technology']),
 usa('Chicago','chicago','Illinois','Major High-Paying Hubs','a diverse enterprise, logistics and professional services market',['Enterprise','Logistics','Finance','Professional services']),
 usa('Miami','miami','Florida','Major High-Paying Hubs','a fast-growing finance, hospitality and international business gateway',['Hospitality','Finance','Real estate','E-commerce']),
 usa('Austin','austin','Texas','Major High-Paying Hubs','a high-growth technology, startup and creative business hub',['Technology','SaaS','Creative','Professional services']),
 usa('Atlanta','atlanta','Georgia','Major High-Paying Hubs','a major logistics, media and corporate services centre',['Logistics','Media','Healthcare','Enterprise']),
 usa('Seattle','seattle','Washington','Major High-Paying Hubs','a technology, cloud and innovation-led economy',['Cloud','Technology','E-commerce','Professional services']),
 usa('Charlotte','charlotte','North Carolina','Low-Competition / Fast-Growing Hubs','a rapidly growing finance and business services centre',['Finance','Professional services','Real estate','Technology']),
 usa('Nashville','nashville','Tennessee','Low-Competition / Fast-Growing Hubs','a healthcare, music and entrepreneurial growth market',['Healthcare','Entertainment','Hospitality','Startups']),
 usa('Phoenix','phoenix','Arizona','Low-Competition / Fast-Growing Hubs','a fast-expanding technology, property and services market',['Technology','Real estate','Healthcare','Home services']),
 usa('Tampa','tampa','Florida','Low-Competition / Fast-Growing Hubs','a growing finance, technology and services economy',['Finance','Technology','Healthcare','Professional services']),
 usa('Salt Lake City','salt-lake-city','Utah','Low-Competition / Fast-Growing Hubs','a strong SaaS, outdoor and entrepreneurial ecosystem',['SaaS','Technology','Outdoor','Professional services']),
 usa('Indianapolis','indianapolis','Indiana','Low-Competition / Fast-Growing Hubs','a healthcare, logistics and advanced manufacturing centre',['Healthcare','Logistics','Manufacturing','Technology']),
 usa('Columbus','columbus','Ohio','Low-Competition / Fast-Growing Hubs','a diverse education, finance and technology growth market',['Education','Finance','Technology','Retail']),
 usa('Raleigh','raleigh','North Carolina','Low-Competition / Fast-Growing Hubs','a research, technology and life-sciences destination',['Technology','Life sciences','Education','SaaS']),
 usa('Kansas City','kansas-city','Missouri','Low-Competition / Fast-Growing Hubs','a central logistics, enterprise and entrepreneurial market',['Logistics','Enterprise','Food','Technology']),
 usa('Boise','boise','Idaho','Low-Competition / Fast-Growing Hubs','an emerging technology and high-quality growth market',['Technology','Professional services','Real estate','Outdoor']),
];

export const countryInfo={
 india:{name:'India',short:'IN',image:'/pages/locations/india-network.webp',headline:'Digital growth across India’s most ambitious business hubs.',copy:'Strategy, design, technology and marketing support for companies building stronger digital experiences across India.'},
 usa:{name:'United States',short:'US',image:'/pages/locations/usa-network.webp',headline:'Digital experiences built for competitive US markets.',copy:'A connected digital agency partner for teams across established metros and fast-growing American business hubs.'},
} as const;

export const getCountryLocations=(country:string)=>locations.filter(location=>location.country===country);
export const getLocation=(country:string,city:string)=>locations.find(location=>location.country===country&&location.slug===city);
export const locationHref=(location:LocationMarket)=>`/locations/${location.country}/${location.slug}`;
export const locationGroups=(country:LocationCountry)=>[...new Set(getCountryLocations(country).map(location=>location.group))];
