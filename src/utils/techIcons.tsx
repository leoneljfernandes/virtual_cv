import type { IconType } from 'react-icons';
import {
  SiPython, SiFastapi, SiTypescript, SiReact, SiPostgresql, SiLinux, SiDocker,
  SiGit, SiGithub, SiGnubash, SiArduino, SiEspressif, SiMqtt, SiNextdotjs,
  SiTailwindcss, SiPytest, SiPydantic, SiSqlalchemy, SiOpencv,
} from 'react-icons/si';
import {
  FaJava, FaDatabase, FaAws, FaTerminal, FaNetworkWired, FaWifi, FaPlug, FaImage,
} from 'react-icons/fa';

const techIcons: Record<string, IconType> = {
  'Python': SiPython,
  'FastAPI': SiFastapi,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'RESTful APIs': FaPlug,
  'Java': FaJava,
  'SQL': FaDatabase,
  'SQL Server': FaDatabase,
  'PostgreSQL': SiPostgresql,
  'Linux': SiLinux,
  'Docker': SiDocker,
  'AWS': FaAws,
  'Git': SiGit,
  'GitHub': SiGithub,
  'TCP/IP, IPv4/IPv6': FaNetworkWired,
  'DHCP': FaNetworkWired,
  'DNS': FaNetworkWired,
  'LAN/WLAN': FaWifi,
  'Bash': SiGnubash,
  'PowerShell': FaTerminal,
  'Subnetting': FaNetworkWired,
  'Arduino': SiArduino,
  'ESP32': SiEspressif,
  'MQTT': SiMqtt,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Pytest': SiPytest,
  'Pydantic': SiPydantic,
  'SQLAlchemy': SiSqlalchemy,
  'OpenCV': SiOpencv,
  'Pillow': FaImage,
};

export const getTechIcon = (name: string): IconType | undefined => techIcons[name];
