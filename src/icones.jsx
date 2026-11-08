// Every icon on the site, from Heroicons (the Tailwind set), in its 24px outline style
// so they all share one stroke. Each keeps the MUI icon call shape (sx with fontSize
// and color) so components can size and colour them the same way.
import { Box } from '@mui/material';
import {
  ArchiveBoxIcon, ArrowPathIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon,
  ArrowTrendingUpIcon, Bars3Icon, BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon,
  CalendarDaysIcon, ChartBarIcon, CheckBadgeIcon, CheckCircleIcon, ChevronDownIcon,
  ClipboardDocumentListIcon, ComputerDesktopIcon, DocumentMagnifyingGlassIcon, DocumentTextIcon,
  EnvelopeIcon, EyeIcon, GlobeAmericasIcon, HomeIcon, InboxArrowDownIcon,
  InformationCircleIcon, LightBulbIcon, LockClosedIcon, MapPinIcon,
  MoonIcon, PaperAirplaneIcon, PhotoIcon, ScaleIcon, ShieldCheckIcon, SparklesIcon, StarIcon,
  SunIcon, TrophyIcon, UserGroupIcon, XMarkIcon,
} from '@heroicons/react/24/outline';

const icone = (Svg) => {
  const Icone = ({ sx, className, style, ...rest }) => (
    <Box
      component={Svg}
      aria-hidden="true"
      className={className}
      style={style}
      sx={{ width: '1em', height: '1em', fontSize: 24, flexShrink: 0, ...sx }}
      {...rest}
    />
  );
  return Icone;
};

// Heroicons has no brand marks, so these two are drawn in the same outline style.
const MarcaLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.75v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.25-2.5S16 11.5 16 13v3" />
  </svg>
);
const MarcaInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.25 6.75v.01" />
  </svg>
);

export const ArrowForward = icone(ArrowRightIcon);
export const EmojiEvents = icone(TrophyIcon);
export const EmojiEventsOutlined = icone(TrophyIcon);
export const PlaceOutlined = icone(MapPinIcon);
export const CheckCircleOutline = icone(CheckCircleIcon);
export const WorkspacePremiumOutlined = icone(CheckBadgeIcon);
export const VisibilityOutlined = icone(EyeIcon);
export const VerifiedOutlined = icone(ShieldCheckIcon);
export const TrendingUpOutlined = icone(ArrowTrendingUpIcon);
export const StarsOutlined = icone(SparklesIcon);
export const SecurityOutlined = icone(LockClosedIcon);
export const PublicOutlined = icone(GlobeAmericasIcon);
export const PolicyOutlined = icone(DocumentMagnifyingGlassIcon);
export const LocationCityOutlined = icone(BuildingOffice2Icon);
export const InfoOutlined = icone(InformationCircleIcon);
export const GavelOutlined = icone(ScaleIcon);
export const DevicesOutlined = icone(ComputerDesktopIcon);
export const CalendarMonthOutlined = icone(CalendarDaysIcon);
export const BarChartOutlined = icone(ChartBarIcon);
export const AutorenewOutlined = icone(ArrowPathIcon);
export const AssignmentOutlined = icone(ClipboardDocumentListIcon);
export const ArchiveOutlined = icone(ArchiveBoxIcon);
export const StarOutline = icone(StarIcon);
export const Send = icone(PaperAirplaneIcon);
export const PhotoLibraryOutlined = icone(PhotoIcon);
export const OpenInNew = icone(ArrowTopRightOnSquareIcon);
export const MoveToInboxOutlined = icone(InboxArrowDownIcon);
export const Menu = icone(Bars3Icon);
export const Email = icone(EnvelopeIcon);
export const LightbulbOutlined = icone(LightBulbIcon);
export const LightModeOutlined = icone(SunIcon);
export const DarkModeOutlined = icone(MoonIcon);
export const HomeOutlined = icone(HomeIcon);
export const GroupsOutlined = icone(UserGroupIcon);
export const ExpandMore = icone(ChevronDownIcon);
export const DescriptionOutlined = icone(DocumentTextIcon);
export const CorporateFareOutlined = icone(BuildingOfficeIcon);
export const Close = icone(XMarkIcon);
export const AccountBalanceOutlined = icone(BuildingLibraryIcon);
export const LinkedIn = icone(MarcaLinkedin);
export const Instagram = icone(MarcaInstagram);
