import AndroidAppDev from "../Component/Services/AppDevelopement/AndroidAppDev";
import HybridAppDev from "../Component/Services/AppDevelopement/HybridAppDevelopment";
import IosDev from "../Component/Services/AppDevelopement/IosDeveloper";
import MobileAppDev from "../Component/Services/AppDevelopement/MobileAppDev";
import ReactNativeDev from "../Component/Services/AppDevelopement/ReactNativeDeveloper";
import Blogs from "../Component/Blogs/Blogs";
import Contact from "../Component/Contact/Contact";
import EcommerceApp from "../Component/Services/EcommerceDevelopment/EcommerceApp";
import EcommerceWebDesign from "../Component/Services/EcommerceDevelopment/EcommerceWebDesign";
import BigCommerceDev from "../Component/Technology/EcommerceTechnology/BigCommerceDev";
import IconicDev from "../Component/Technology/MobileTechnology/IconicDev";
import JqueryMobile from "../Component/Technology/MobileTechnology/JqueryMobile";
import MagentoDev from "../Component/Technology/EcommerceTechnology/MagentoDev";
import OpenCartDev from "../Component/Technology/EcommerceTechnology/OpenCartDev";
import ShopifyDev from "../Component/Technology/EcommerceTechnology/ShopifyDev";
import SwiftDev from "../Component/Technology/MobileTechnology/SwiftDev";
import WooCommerceDev from "../Component/Technology/EcommerceTechnology/WooCommerceDev";
import AboutUs from "../Component/FooterSection/AboutUs";
import Career from "../Component/FooterSection/Career";
import Services from "../Component/FooterSection/Services";
import HireAndroidDev from "../Component/HireUs/HireAndroidDev";
import HireAngularDev from "../Component/HireUs/HireAngularDev";
import HireIosDev from "../Component/HireUs/HireIosDev";
import HireLaravelDev from "../Component/HireUs/HireLaravelDev";
import HireNodeDev from "../Component/HireUs/HireNodeDev";
import HirePhpDev from "../Component/HireUs/HirePhpDev";
import HireReNativeDev from "../Component/HireUs/HireReNativeDev";
import HireWordpressDev from "../Component/HireUs/HireWordpressDev";
import ContentMarketing from "../Component/Services/MarketingAndLead/ContentMarketing";
import DigitalMarketing from "../Component/Services/MarketingAndLead/DigitalMarketing";
import LocalSeo from "../Component/Services/MarketingAndLead/LocalSeo";
import PpcManagement from "../Component/Services/MarketingAndLead/PpcManagement";
import SeoServices from "../Component/Services/MarketingAndLead/SeoServices";
import SocialMediaMarketing from "../Component/Services/MarketingAndLead/SocialMediaMarketing";
import Portfolio from "../Component/Portfolio/Portfolio";

import BrandIdentity from "../Component/Services/DesignBranding/BrandIdentity";
import BrochureDesign from "../Component/Services/DesignBranding/BrochureDesign";
import ContentWriting from "../Component/Services/DesignBranding/ContentWriting";
import CorporateIdentity from "../Component/Services/DesignBranding/CorporateIdentity";
import DesignBrandingTemplate from "../Component/Services/DesignBranding/DesignBrandingTemplate";
import ExplainerVideo from "../Component/Services/DesignBranding/ExplainerVideo";
import LogoDesign from "../Component/Services/DesignBranding/LogoDesign";
import SmallBusinessWeb from "../Component/Services/WebSolution/SmallBusinessWeb";
import WebAppDevelopement from "../Component/Services/WebSolution/WebAppDevelopement";
import WebsiteDesign from "../Component/Services/WebSolution/WebsiteDesign";
import DynamicWebDev from "../Component/Solutions/DynamicWebDev";
import EcommerceMobileApp from "../Component/Solutions/EcommerceMobileApp";
import ElearningSolutions from "../Component/Solutions/ElearningSolutions";
import FoodDeliveryApp from "../Component/Solutions/FoodDeliveryApp";
import PropertyListingSolution from "../Component/Solutions/PropertyListingSolution";
import ShoppingCartDev from "../Component/Solutions/ShoppingCartDev";
import DrupalDev from "../Component/Technology/CMS Technology/DrupalDevelopment";
import JoomlaDev from "../Component/Technology/CMS Technology/JoomlaDevelopment";
import WordpressDev from "../Component/Technology/CMS Technology/WordpressDevelopment";
import AngularDev from "../Component/Technology/WebTechnology/AngularDev";
import NodeJsDev from "../Component/Technology/WebTechnology/NodeJsDev";
import PHPTechnology from "../Component/Technology/WebTechnology/PHPTechnology";
import ReactDev from "../Component/Technology/WebTechnology/ReactDev";
import Home from "../Pages/Home";
import Clients from "../Component/Clients/Clients";
import MongoDB from "../Component/Technology/WebTechnology/MongoDB";

export const RouteData = [
  // Parent Section
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Portfolio />,
    path: "/portfolio",
  },
  {
    element: <Clients />,
    path: "/clients",
  },
  {
    element: <Blogs />,
    path: "/blogs",
  },
  {
    element: <Contact />,
    path: "/contact",
  },

  // **Web Solution Routes**
  {
    element: <WebsiteDesign />,
    path: "/website-design",
  },
  {
    element: <WebAppDevelopement />,
    path: "/web-app-developement",
  },
  {
    element: <SmallBusinessWeb />,
    path: "/small-business-website",
  },

  // **Design & Branding Routes**
  {
    element: <LogoDesign />,
    path: "/logo-design",
  },
  {
    element: <BrandIdentity />,
    path: "/brand-identity",
  },
  {
    element: <CorporateIdentity />,
    path: "/corporate-identity",
  },
  {
    element: <BrochureDesign />,
    path: "/brochure-design",
  },
  {
    element: <ExplainerVideo />,
    path: "/explainer-video",
  },
  {
    element: <ContentWriting />,
    path: "/content-writing",
  },

  // **Ecommerce Developement Routes**

  {
    element: <EcommerceWebDesign />,
    path: "/ecommerce-web-design",
  },
  {
    element: <EcommerceApp />,
    path: "/ecommerce-app",
  },

  // **services app development**

  //
  {
    element: <MobileAppDev />,
    path: "/mobile-app-dev",
  },
  {
    element: <AndroidAppDev />,
    path: "/android-app-dev",
  },
  {
    element: <IosDev />,
    path: "/ios-app-dev",
  },
  {
    element: <HybridAppDev />,
    path: "/hybrid-app-dev",
  },

  // **Markeing & Lead Generation Routes**

  {
    element: <DigitalMarketing />,
    path: "/digital-marketing",
  },
  {
    element: <SeoServices />,
    path: "/seo-services",
  },
  {
    element: <SocialMediaMarketing />,
    path: "/social-media-marketing",
  },
  {
    element: <PpcManagement />,
    path: "/ppc-management",
  },
  {
    element: <LocalSeo />,
    path: "/local-seo",
  },
  {
    element: <ContentMarketing />,
    path: "/content-marketing",
  },

  // Web Technologies Routes
  {
    element: <NodeJsDev />,
    path: "/nodejs-dev",
  },
  {
    element: <AngularDev />,
    path: "/angular-dev",
  },
  {
    element: <ReactDev />,
    path: "/react-dev",
  },
  {
    element: <PHPTechnology />,
    path: "/php-dev",
  },
  {
    element: <MongoDB />,
    path: "/mongodb-dev",
  },

  // CMS Technologies Routes
  {
    element: <WordpressDev />,
    path: "/wordpress-dev",
  },
  {
    element: <DrupalDev />,
    path: "/drupal-dev",
  },
  {
    element: <JoomlaDev />,
    path: "/joomla-dev",
  },

  // **Ecommerce Technologies Routes**
  {
    element: <MagentoDev />,
    path: "/magento-dev",
  },
  {
    element: <ShopifyDev />,
    path: "/shopify-dev",
  },
  {
    element: <BigCommerceDev />,
    path: "/big-commerce-dev",
  },
  {
    element: <WooCommerceDev />,
    path: "/woo-commerce-dev",
  },
  {
    element: <OpenCartDev />,
    path: "/open-cart-dev",
  },

  // **Ecommerce Technologies Routes**
  {
    element: <ReactNativeDev />,
    path: "/react-native-dev",
  },
  {
    element: <SwiftDev />,
    path: "/swift-app-dev",
  },
  {
    element: <JqueryMobile />,
    path: "/jquery-mobile",
  },
  {
    element: <IconicDev />,
    path: "/iconic-dev",
  },

  // **Ecommerce Technologies Routes**
  {
    element: <HireAngularDev />,
    path: "/hire-angular-dev",
  },
  {
    element: <HireNodeDev />,
    path: "/hire-node-dev",
  },
  {
    element: <HireLaravelDev />,
    path: "/hire-laravel-dev",
  },
  {
    element: <HirePhpDev />,
    path: "/hire-php-dev",
  },
  {
    element: <HireWordpressDev />,
    path: "/hire-wordpress-dev",
  },
  {
    element: <HireAndroidDev />,
    path: "/hire-android-dev",
  },
  {
    element: <HireIosDev />,
    path: "/hire-ios-dev",
  },
  {
    element: <HireReNativeDev />,
    path: "/hire-renative-dev",
  },

  // **Solutions Routes**
  {
    element: <FoodDeliveryApp />,
    path: "/food-delivery-app",
  },
  {
    element: <EcommerceMobileApp />,
    path: "/ecommerce-mobile-app",
  },
  {
    element: <ElearningSolutions />,
    path: "/elearning-solution",
  },
  {
    element: <PropertyListingSolution />,
    path: "/property-listing-solution",
  },
  {
    element: <ShoppingCartDev />,
    path: "/shopping-cart-dev",
  },
  {
    element: <DynamicWebDev />,
    path: "/dynamic-web-dev",
  },

  // **Footer Section**
  {
    element: <AboutUs />,
    path: "/about-us",
  },
  {
    element: <Services />,
    path: "/services",
  },
  {
    element: <Career />,
    path: "/career",
  },
];
