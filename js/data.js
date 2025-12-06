// Element data with all known elements
const elements = [
    // Group 1: Alkali Metals
    { number: 1, symbol: 'H', name: 'Hidrógeno', category: 'nonmetal', mass: '1.008', electron: '1s¹', electronegativity: '2.20', discovered: '1766' },
    { number: 3, symbol: 'Li', name: 'Litio', category: 'alkali-metal', mass: '6.94', electron: '[He] 2s¹', electronegativity: '0.98', discovered: '1817' },
    { number: 11, symbol: 'Na', name: 'Sodio', category: 'alkali-metal', mass: '22.99', electron: '[Ne] 3s¹', electronegativity: '0.93', discovered: '1807' },
    { number: 19, symbol: 'K', name: 'Potasio', category: 'alkali-metal', mass: '39.10', electron: '[Ar] 4s¹', electronegativity: '0.82', discovered: '1807' },
    { number: 37, symbol: 'Rb', name: 'Rubidio', category: 'alkali-metal', mass: '85.47', electron: '[Kr] 5s¹', electronegativity: '0.82', discovered: '1861' },
    { number: 55, symbol: 'Cs', name: 'Cesio', category: 'alkali-metal', mass: '132.91', electron: '[Xe] 6s¹', electronegativity: '0.79', discovered: '1860' },
    { number: 87, symbol: 'Fr', name: 'Francio', category: 'alkali-metal', mass: '223', electron: '[Rn] 7s¹', electronegativity: '0.7', discovered: '1939' },

    // Group 2: Alkaline Earth Metals
    { number: 4, symbol: 'Be', name: 'Berilio', category: 'alkaline-earth', mass: '9.01', electron: '[He] 2s²', electronegativity: '1.57', discovered: '1798' },
    { number: 12, symbol: 'Mg', name: 'Magnesio', category: 'alkaline-earth', mass: '24.31', electron: '[Ne] 3s²', electronegativity: '1.31', discovered: '1755' },
    { number: 20, symbol: 'Ca', name: 'Calcio', category: 'alkaline-earth', mass: '40.08', electron: '[Ar] 4s²', electronegativity: '1.00', discovered: '1808' },
    { number: 38, symbol: 'Sr', name: 'Estroncio', category: 'alkaline-earth', mass: '87.62', electron: '[Kr] 5s²', electronegativity: '0.95', discovered: '1790' },
    { number: 56, symbol: 'Ba', name: 'Bario', category: 'alkaline-earth', mass: '137.33', electron: '[Xe] 6s²', electronegativity: '0.89', discovered: '1808' },
    { number: 88, symbol: 'Ra', name: 'Radio', category: 'alkaline-earth', mass: '226', electron: '[Rn] 7s²', electronegativity: '0.9', discovered: '1898' },

    // Transition Metals
    { number: 21, symbol: 'Sc', name: 'Escandio', category: 'transition-metal', mass: '44.96', electron: '[Ar] 3d¹ 4s²', electronegativity: '1.36', discovered: '1879' },
    { number: 22, symbol: 'Ti', name: 'Titanio', category: 'transition-metal', mass: '47.87', electron: '[Ar] 3d² 4s²', electronegativity: '1.54', discovered: '1791' },
    { number: 23, symbol: 'V', name: 'Vanadio', category: 'transition-metal', mass: '50.94', electron: '[Ar] 3d³ 4s²', electronegativity: '1.63', discovered: '1801' },
    { number: 24, symbol: 'Cr', name: 'Cromo', category: 'transition-metal', mass: '52.00', electron: '[Ar] 3d⁵ 4s¹', electronegativity: '1.66', discovered: '1797' },
    { number: 25, symbol: 'Mn', name: 'Manganeso', category: 'transition-metal', mass: '54.94', electron: '[Ar] 3d⁵ 4s²', electronegativity: '1.55', discovered: '1774' },
    { number: 26, symbol: 'Fe', name: 'Hierro', category: 'transition-metal', mass: '55.85', electron: '[Ar] 3d⁶ 4s²', electronegativity: '1.83', discovered: 'Antigüedad' },
    { number: 27, symbol: 'Co', name: 'Cobalto', category: 'transition-metal', mass: '58.93', electron: '[Ar] 3d⁷ 4s²', electronegativity: '1.88', discovered: '1735' },
    { number: 28, symbol: 'Ni', name: 'Níquel', category: 'transition-metal', mass: '58.69', electron: '[Ar] 3d⁸ 4s²', electronegativity: '1.91', discovered: '1751' },
    { number: 29, symbol: 'Cu', name: 'Cobre', category: 'transition-metal', mass: '63.55', electron: '[Ar] 3d¹⁰ 4s¹', electronegativity: '1.90', discovered: 'Antigüedad' },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', mass: '65.38', electron: '[Ar] 3d¹⁰ 4s²', electronegativity: '1.65', discovered: '1746' },
    { number: 39, symbol: 'Y', name: 'Itrio', category: 'transition-metal', mass: '88.91', electron: '[Kr] 4d¹ 5s²', electronegativity: '1.22', discovered: '1794' },
    { number: 40, symbol: 'Zr', name: 'Circonio', category: 'transition-metal', mass: '91.22', electron: '[Kr] 4d² 5s²', electronegativity: '1.33', discovered: '1789' },
    { number: 41, symbol: 'Nb', name: 'Niobio', category: 'transition-metal', mass: '92.91', electron: '[Kr] 4d⁴ 5s¹', electronegativity: '1.6', discovered: '1801' },
    { number: 42, symbol: 'Mo', name: 'Molibdeno', category: 'transition-metal', mass: '95.95', electron: '[Kr] 4d⁵ 5s¹', electronegativity: '2.16', discovered: '1778' },
    { number: 43, symbol: 'Tc', name: 'Tecnecio', category: 'transition-metal', mass: '98', electron: '[Kr] 4d⁵ 5s²', electronegativity: '1.9', discovered: '1937' },
    { number: 44, symbol: 'Ru', name: 'Rutenio', category: 'transition-metal', mass: '101.07', electron: '[Kr] 4d⁷ 5s¹', electronegativity: '2.2', discovered: '1844' },
    { number: 45, symbol: 'Rh', name: 'Rodio', category: 'transition-metal', mass: '102.91', electron: '[Kr] 4d⁸ 5s¹', electronegativity: '2.28', discovered: '1803' },
    { number: 46, symbol: 'Pd', name: 'Paladio', category: 'transition-metal', mass: '106.42', electron: '[Kr] 4d¹⁰', electronegativity: '2.20', discovered: '1803' },
    { number: 47, symbol: 'Ag', name: 'Plata', category: 'transition-metal', mass: '107.87', electron: '[Kr] 4d¹⁰ 5s¹', electronegativity: '1.93', discovered: 'Antigüedad' },
    { number: 48, symbol: 'Cd', name: 'Cadmio', category: 'transition-metal', mass: '112.41', electron: '[Kr] 4d¹⁰ 5s²', electronegativity: '1.69', discovered: '1817' },
    { number: 72, symbol: 'Hf', name: 'Hafnio', category: 'transition-metal', mass: '178.49', electron: '[Xe] 4f¹⁴ 5d² 6s²', electronegativity: '1.3', discovered: '1923' },
    { number: 73, symbol: 'Ta', name: 'Tántalo', category: 'transition-metal', mass: '180.95', electron: '[Xe] 4f¹⁴ 5d³ 6s²', electronegativity: '1.5', discovered: '1802' },
    { number: 74, symbol: 'W', name: 'Wolframio', category: 'transition-metal', mass: '183.84', electron: '[Xe] 4f¹⁴ 5d⁴ 6s²', electronegativity: '2.36', discovered: '1783' },
    { number: 75, symbol: 'Re', name: 'Renio', category: 'transition-metal', mass: '186.21', electron: '[Xe] 4f¹⁴ 5d⁵ 6s²', electronegativity: '1.9', discovered: '1925' },
    { number: 76, symbol: 'Os', name: 'Osmio', category: 'transition-metal', mass: '190.23', electron: '[Xe] 4f¹⁴ 5d⁶ 6s²', electronegativity: '2.2', discovered: '1803' },
    { number: 77, symbol: 'Ir', name: 'Iridio', category: 'transition-metal', mass: '192.22', electron: '[Xe] 4f¹⁴ 5d⁷ 6s²', electronegativity: '2.20', discovered: '1803' },
    { number: 78, symbol: 'Pt', name: 'Platino', category: 'transition-metal', mass: '195.08', electron: '[Xe] 4f¹⁴ 5d⁹ 6s¹', electronegativity: '2.28', discovered: '1735' },
    { number: 79, symbol: 'Au', name: 'Oro', category: 'transition-metal', mass: '196.97', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', electronegativity: '2.54', discovered: 'Antigüedad' },
    { number: 80, symbol: 'Hg', name: 'Mercurio', category: 'transition-metal', mass: '200.59', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', electronegativity: '2.00', discovered: 'Antigüedad' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordio', category: 'transition-metal', mass: '267', electron: '[Rn] 5f¹⁴ 6d² 7s²', electronegativity: 'N/A', discovered: '1969' },
    { number: 105, symbol: 'Db', name: 'Dubnio', category: 'transition-metal', mass: '268', electron: '[Rn] 5f¹⁴ 6d³ 7s²', electronegativity: 'N/A', discovered: '1970' },
    { number: 106, symbol: 'Sg', name: 'Seaborgio', category: 'transition-metal', mass: '269', electron: '[Rn] 5f¹⁴ 6d⁴ 7s²', electronegativity: 'N/A', discovered: '1974' },
    { number: 107, symbol: 'Bh', name: 'Bohrio', category: 'transition-metal', mass: '270', electron: '[Rn] 5f¹⁴ 6d⁵ 7s²', electronegativity: 'N/A', discovered: '1981' },
    { number: 108, symbol: 'Hs', name: 'Hassio', category: 'transition-metal', mass: '269', electron: '[Rn] 5f¹⁴ 6d⁶ 7s²', electronegativity: 'N/A', discovered: '1984' },
    { number: 109, symbol: 'Mt', name: 'Meitnerio', category: 'transition-metal', mass: '278', electron: '[Rn] 5f¹⁴ 6d⁷ 7s²', electronegativity: 'N/A', discovered: '1982' },
    { number: 110, symbol: 'Ds', name: 'Darmstatio', category: 'transition-metal', mass: '281', electron: '[Rn] 5f¹⁴ 6d⁹ 7s¹', electronegativity: 'N/A', discovered: '1994' },
    { number: 111, symbol: 'Rg', name: 'Roentgenio', category: 'transition-metal', mass: '282', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s¹', electronegativity: 'N/A', discovered: '1994' },
    { number: 112, symbol: 'Cn', name: 'Copernicio', category: 'transition-metal', mass: '285', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', electronegativity: 'N/A', discovered: '1996' },

    // Post-transition metals
    { number: 13, symbol: 'Al', name: 'Aluminio', category: 'post-transition', mass: '26.98', electron: '[Ne] 3s² 3p¹', electronegativity: '1.61', discovered: '1825' },
    { number: 31, symbol: 'Ga', name: 'Galio', category: 'post-transition', mass: '69.72', electron: '[Ar] 3d¹⁰ 4s² 4p¹', electronegativity: '1.81', discovered: '1875' },
    { number: 49, symbol: 'In', name: 'Indio', category: 'post-transition', mass: '114.82', electron: '[Kr] 4d¹⁰ 5s² 5p¹', electronegativity: '1.78', discovered: '1863' },
    { number: 50, symbol: 'Sn', name: 'Estaño', category: 'post-transition', mass: '118.71', electron: '[Kr] 4d¹⁰ 5s² 5p²', electronegativity: '1.96', discovered: 'Antigüedad' },
    { number: 81, symbol: 'Tl', name: 'Talio', category: 'post-transition', mass: '204.38', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', electronegativity: '1.62', discovered: '1861' },
    { number: 82, symbol: 'Pb', name: 'Plomo', category: 'post-transition', mass: '207.2', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', electronegativity: '2.33', discovered: 'Antigüedad' },
    { number: 83, symbol: 'Bi', name: 'Bismuto', category: 'post-transition', mass: '208.98', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', electronegativity: '2.02', discovered: '1753' },
    { number: 113, symbol: 'Nh', name: 'Nihonio', category: 'post-transition', mass: '286', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', electronegativity: 'N/A', discovered: '2004' },
    { number: 114, symbol: 'Fl', name: 'Flerovio', category: 'post-transition', mass: '289', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', electronegativity: 'N/A', discovered: '1999' },
    { number: 115, symbol: 'Mc', name: 'Moscovio', category: 'post-transition', mass: '290', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', electronegativity: 'N/A', discovered: '2003' },
    { number: 116, symbol: 'Lv', name: 'Livermorio', category: 'post-transition', mass: '293', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', electronegativity: 'N/A', discovered: '2000' },

    // Metalloids
    { number: 5, symbol: 'B', name: 'Boro', category: 'metalloid', mass: '10.81', electron: '[He] 2s² 2p¹', electronegativity: '2.04', discovered: '1808' },
    { number: 14, symbol: 'Si', name: 'Silicio', category: 'metalloid', mass: '28.09', electron: '[Ne] 3s² 3p²', electronegativity: '1.90', discovered: '1824' },
    { number: 32, symbol: 'Ge', name: 'Germanio', category: 'metalloid', mass: '72.63', electron: '[Ar] 3d¹⁰ 4s² 4p²', electronegativity: '2.01', discovered: '1886' },
    { number: 33, symbol: 'As', name: 'Arsénico', category: 'metalloid', mass: '74.92', electron: '[Ar] 3d¹⁰ 4s² 4p³', electronegativity: '2.18', discovered: 'Antigüedad' },
    { number: 51, symbol: 'Sb', name: 'Antimonio', category: 'metalloid', mass: '121.76', electron: '[Kr] 4d¹⁰ 5s² 5p³', electronegativity: '2.05', discovered: 'Antigüedad' },
    { number: 52, symbol: 'Te', name: 'Telurio', category: 'metalloid', mass: '127.60', electron: '[Kr] 4d¹⁰ 5s² 5p⁴', electronegativity: '2.10', discovered: '1782' },
    { number: 84, symbol: 'Po', name: 'Polonio', category: 'metalloid', mass: '209', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', electronegativity: '2.0', discovered: '1898' },

    // Nonmetals
    { number: 6, symbol: 'C', name: 'Carbono', category: 'nonmetal', mass: '12.01', electron: '[He] 2s² 2p²', electronegativity: '2.55', discovered: 'Antigüedad' },
    { number: 7, symbol: 'N', name: 'Nitrógeno', category: 'nonmetal', mass: '14.01', electron: '[He] 2s² 2p³', electronegativity: '3.04', discovered: '1772' },
    { number: 8, symbol: 'O', name: 'Oxígeno', category: 'nonmetal', mass: '16.00', electron: '[He] 2s² 2p⁴', electronegativity: '3.44', discovered: '1774' },
    { number: 15, symbol: 'P', name: 'Fósforo', category: 'nonmetal', mass: '30.97', electron: '[Ne] 3s² 3p³', electronegativity: '2.19', discovered: '1669' },
    { number: 16, symbol: 'S', name: 'Azufre', category: 'nonmetal', mass: '32.07', electron: '[Ne] 3s² 3p⁴', electronegativity: '2.58', discovered: 'Antigüedad' },
    { number: 34, symbol: 'Se', name: 'Selenio', category: 'nonmetal', mass: '78.97', electron: '[Ar] 3d¹⁰ 4s² 4p⁴', electronegativity: '2.55', discovered: '1817' },

    // Halogens
    { number: 9, symbol: 'F', name: 'Flúor', category: 'halogen', mass: '19.00', electron: '[He] 2s² 2p⁵', electronegativity: '3.98', discovered: '1886' },
    { number: 17, symbol: 'Cl', name: 'Cloro', category: 'halogen', mass: '35.45', electron: '[Ne] 3s² 3p⁵', electronegativity: '3.16', discovered: '1774' },
    { number: 35, symbol: 'Br', name: 'Bromo', category: 'halogen', mass: '79.90', electron: '[Ar] 3d¹⁰ 4s² 4p⁵', electronegativity: '2.96', discovered: '1826' },
    { number: 53, symbol: 'I', name: 'Yodo', category: 'halogen', mass: '126.90', electron: '[Kr] 4d¹⁰ 5s² 5p⁵', electronegativity: '2.66', discovered: '1811' },
    { number: 85, symbol: 'At', name: 'Ástato', category: 'halogen', mass: '210', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', electronegativity: '2.2', discovered: '1940' },
    { number: 117, symbol: 'Ts', name: 'Teneso', category: 'halogen', mass: '294', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', electronegativity: 'N/A', discovered: '2010' },

    // Noble Gases
    { number: 2, symbol: 'He', name: 'Helio', category: 'noble-gas', mass: '4.00', electron: '1s²', electronegativity: 'N/A', discovered: '1868' },
    { number: 10, symbol: 'Ne', name: 'Neón', category: 'noble-gas', mass: '20.18', electron: '[He] 2s² 2p⁶', electronegativity: 'N/A', discovered: '1898' },
    { number: 18, symbol: 'Ar', name: 'Argón', category: 'noble-gas', mass: '39.95', electron: '[Ne] 3s² 3p⁶', electronegativity: 'N/A', discovered: '1894' },
    { number: 36, symbol: 'Kr', name: 'Kriptón', category: 'noble-gas', mass: '83.80', electron: '[Ar] 3d¹⁰ 4s² 4p⁶', electronegativity: '3.00', discovered: '1898' },
    { number: 54, symbol: 'Xe', name: 'Xenón', category: 'noble-gas', mass: '131.29', electron: '[Kr] 4d¹⁰ 5s² 5p⁶', electronegativity: '2.6', discovered: '1898' },
    { number: 86, symbol: 'Rn', name: 'Radón', category: 'noble-gas', mass: '222', electron: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', electronegativity: '2.2', discovered: '1900' },
    { number: 118, symbol: 'Og', name: 'Oganesón', category: 'noble-gas', mass: '294', electron: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', electronegativity: 'N/A', discovered: '2002' },

    // Lanthanides
    { number: 57, symbol: 'La', name: 'Lantano', category: 'lanthanide', mass: '138.91', electron: '[Xe] 5d¹ 6s²', electronegativity: '1.1', discovered: '1839' },
    { number: 58, symbol: 'Ce', name: 'Cerio', category: 'lanthanide', mass: '140.12', electron: '[Xe] 4f¹ 5d¹ 6s²', electronegativity: '1.12', discovered: '1803' },
    { number: 59, symbol: 'Pr', name: 'Praseodimio', category: 'lanthanide', mass: '140.91', electron: '[Xe] 4f³ 6s²', electronegativity: '1.13', discovered: '1885' },
    { number: 60, symbol: 'Nd', name: 'Neodimio', category: 'lanthanide', mass: '144.24', electron: '[Xe] 4f⁴ 6s²', electronegativity: '1.14', discovered: '1885' },
    { number: 61, symbol: 'Pm', name: 'Prometio', category: 'lanthanide', mass: '145', electron: '[Xe] 4f⁵ 6s²', electronegativity: '1.13', discovered: '1945' },
    { number: 62, symbol: 'Sm', name: 'Samario', category: 'lanthanide', mass: '150.36', electron: '[Xe] 4f⁶ 6s²', electronegativity: '1.17', discovered: '1879' },
    { number: 63, symbol: 'Eu', name: 'Europio', category: 'lanthanide', mass: '151.96', electron: '[Xe] 4f⁷ 6s²', electronegativity: '1.2', discovered: '1901' },
    { number: 64, symbol: 'Gd', name: 'Gadolinio', category: 'lanthanide', mass: '157.25', electron: '[Xe] 4f⁷ 5d¹ 6s²', electronegativity: '1.2', discovered: '1880' },
    { number: 65, symbol: 'Tb', name: 'Terbio', category: 'lanthanide', mass: '158.93', electron: '[Xe] 4f⁹ 6s²', electronegativity: '1.2', discovered: '1843' },
    { number: 66, symbol: 'Dy', name: 'Disprosio', category: 'lanthanide', mass: '162.50', electron: '[Xe] 4f¹⁰ 6s²', electronegativity: '1.22', discovered: '1886' },
    { number: 67, symbol: 'Ho', name: 'Holmio', category: 'lanthanide', mass: '164.93', electron: '[Xe] 4f¹¹ 6s²', electronegativity: '1.23', discovered: '1878' },
    { number: 68, symbol: 'Er', name: 'Erbio', category: 'lanthanide', mass: '167.26', electron: '[Xe] 4f¹² 6s²', electronegativity: '1.24', discovered: '1843' },
    { number: 69, symbol: 'Tm', name: 'Tulio', category: 'lanthanide', mass: '168.93', electron: '[Xe] 4f¹³ 6s²', electronegativity: '1.25', discovered: '1879' },
    { number: 70, symbol: 'Yb', name: 'Iterbio', category: 'lanthanide', mass: '173.05', electron: '[Xe] 4f¹⁴ 6s²', electronegativity: '1.1', discovered: '1878' },
    { number: 71, symbol: 'Lu', name: 'Lutecio', category: 'lanthanide', mass: '174.97', electron: '[Xe] 4f¹⁴ 5d¹ 6s²', electronegativity: '1.27', discovered: '1907' },

    // Actinides
    { number: 89, symbol: 'Ac', name: 'Actinio', category: 'actinide', mass: '227', electron: '[Rn] 6d¹ 7s²', electronegativity: '1.1', discovered: '1899' },
    { number: 90, symbol: 'Th', name: 'Torio', category: 'actinide', mass: '232.04', electron: '[Rn] 6d² 7s²', electronegativity: '1.3', discovered: '1829' },
    { number: 91, symbol: 'Pa', name: 'Protactinio', category: 'actinide', mass: '231.04', electron: '[Rn] 5f² 6d¹ 7s²', electronegativity: '1.5', discovered: '1913' },
    { number: 92, symbol: 'U', name: 'Uranio', category: 'actinide', mass: '238.03', electron: '[Rn] 5f³ 6d¹ 7s²', electronegativity: '1.38', discovered: '1789' },
    { number: 93, symbol: 'Np', name: 'Neptunio', category: 'actinide', mass: '237', electron: '[Rn] 5f⁴ 6d¹ 7s²', electronegativity: '1.36', discovered: '1940' },
    { number: 94, symbol: 'Pu', name: 'Plutonio', category: 'actinide', mass: '244', electron: '[Rn] 5f⁶ 7s²', electronegativity: '1.28', discovered: '1940' },
    { number: 95, symbol: 'Am', name: 'Americio', category: 'actinide', mass: '243', electron: '[Rn] 5f⁷ 7s²', electronegativity: '1.3', discovered: '1944' },
    { number: 96, symbol: 'Cm', name: 'Curio', category: 'actinide', mass: '247', electron: '[Rn] 5f⁷ 6d¹ 7s²', electronegativity: '1.3', discovered: '1944' },
    { number: 97, symbol: 'Bk', name: 'Berkelio', category: 'actinide', mass: '247', electron: '[Rn] 5f⁹ 7s²', electronegativity: '1.3', discovered: '1949' },
    { number: 98, symbol: 'Cf', name: 'Californio', category: 'actinide', mass: '251', electron: '[Rn] 5f¹⁰ 7s²', electronegativity: '1.3', discovered: '1950' },
    { number: 99, symbol: 'Es', name: 'Einstenio', category: 'actinide', mass: '252', electron: '[Rn] 5f¹¹ 7s²', electronegativity: '1.3', discovered: '1952' },
    { number: 100, symbol: 'Fm', name: 'Fermio', category: 'actinide', mass: '257', electron: '[Rn] 5f¹² 7s²', electronegativity: '1.3', discovered: '1952' },
    { number: 101, symbol: 'Md', name: 'Mendelevio', category: 'actinide', mass: '258', electron: '[Rn] 5f¹³ 7s²', electronegativity: '1.3', discovered: '1955' },
    { number: 102, symbol: 'No', name: 'Nobelio', category: 'actinide', mass: '259', electron: '[Rn] 5f¹⁴ 7s²', electronegativity: '1.3', discovered: '1966' },
    { number: 103, symbol: 'Lr', name: 'Laurencio', category: 'actinide', mass: '266', electron: '[Rn] 5f¹⁴ 7s² 7p¹', electronegativity: '1.3', discovered: '1961' }
];

// Position data for the periodic table layout
// Format: [row, column, element_number]
const positions = [
    // Row 1
    [1, 1, 1], [1, 18, 2],
    // Row 2
    [2, 1, 3], [2, 2, 4],
    [2, 13, 5], [2, 14, 6], [2, 15, 7], [2, 16, 8], [2, 17, 9], [2, 18, 10],
    // Row 3
    [3, 1, 11], [3, 2, 12],
    [3, 13, 13], [3, 14, 14], [3, 15, 15], [3, 16, 16], [3, 17, 17], [3, 18, 18],
    // Row 4
    [4, 1, 19], [4, 2, 20],
    [4, 3, 21], [4, 4, 22], [4, 5, 23], [4, 6, 24], [4, 7, 25], [4, 8, 26], [4, 9, 27], [4, 10, 28], [4, 11, 29], [4, 12, 30],
    [4, 13, 31], [4, 14, 32], [4, 15, 33], [4, 16, 34], [4, 17, 35], [4, 18, 36],
    // Row 5
    [5, 1, 37], [5, 2, 38],
    [5, 3, 39], [5, 4, 40], [5, 5, 41], [5, 6, 42], [5, 7, 43], [5, 8, 44], [5, 9, 45], [5, 10, 46], [5, 11, 47], [5, 12, 48],
    [5, 13, 49], [5, 14, 50], [5, 15, 51], [5, 16, 52], [5, 17, 53], [5, 18, 54],
    // Row 6
    [6, 1, 55], [6, 2, 56],
    [6, 3, 72], [6, 4, 72], [6, 5, 73], [6, 6, 74], [6, 7, 75], [6, 8, 76], [6, 9, 77], [6, 10, 78], [6, 11, 79], [6, 12, 80],
    [6, 13, 81], [6, 14, 82], [6, 15, 83], [6, 16, 84], [6, 17, 85], [6, 18, 86],
    // Row 7
    [7, 1, 87], [7, 2, 88],
    [7, 3, 104], [7, 4, 105], [7, 5, 106], [7, 6, 107], [7, 7, 108], [7, 8, 109], [7, 9, 110], [7, 10, 111], [7, 11, 112], [7, 12, 113],
    [7, 13, 114], [7, 14, 115], [7, 15, 116], [7, 16, 117], [7, 17, 118],
    // Lanthanides
    [9, 4, 57], [9, 5, 58], [9, 6, 59], [9, 7, 60], [9, 8, 61], [9, 9, 62], [9, 10, 63], [9, 11, 64], [9, 12, 65], [9, 13, 66],
    [9, 14, 67], [9, 15, 68], [9, 16, 69], [9, 17, 70], [9, 18, 71],
    // Actinides
    [10, 4, 89], [10, 5, 90], [10, 6, 91], [10, 7, 92], [10, 8, 93], [10, 9, 94], [10, 10, 95], [10, 11, 96], [10, 12, 97], [10, 13, 98],
    [10, 14, 99], [10, 15, 100], [10, 16, 101], [10, 17, 102], [10, 18, 103]
];

// Helper function to get group name in Spanish
function getGroupName(category) {
    const groups = {
        'alkali-metal': 'Metales alcalinos',
        'alkaline-earth': 'Alcalinotérreos',
        'transition-metal': 'Metales de transición',
        'post-transition': 'Metales del bloque p',
        'metalloid': 'Metaloides',
        'nonmetal': 'No metales',
        'halogen': 'Halógenos',
        'noble-gas': 'Gases nobles',
        'lanthanide': 'Lantánidos',
        'actinide': 'Actínidos',
        'unknown': 'Desconocido'
    };
    return groups[category] || category;
}
