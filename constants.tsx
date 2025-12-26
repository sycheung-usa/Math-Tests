
import { CurriculumData, GradeLevel, Difficulty } from './types';

export const CURRICULUM: CurriculumData[] = [
  {
    grade: GradeLevel.GRADE_4,
    topics: [
      {
        name: 'Operations',
        description: 'Multi-digit multiplication, division, and word problems.',
        questions: {
          [Difficulty.EASY]: [
            { id: '4-o-e1', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.EASY, text: 'Sarah has 4 boxes of crayons. Each box has 24 crayons. How many crayons does she have in total?', options: ['80', '96', '100', '86'], correctAnswer: 1, hint: 'Multiply 4 by 20, then 4 by 4.', explanation: '4 groups of 24 is 4 * 24 = 96.' },
            { id: '4-o-e2', type: 'numerical', subject: 'Operations', difficulty: Difficulty.EASY, text: 'A library has 5 shelves. If each shelf holds 15 books, how many books are there in total?', correctAnswer: '75', units: 'books', hint: 'Think 5 times 10, then 5 times 5.', explanation: '5 * 15 = 75 books total.' },
            { id: '4-o-e3', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.EASY, text: 'Look at the table. How much more does a Pizza cost than a Burger?', tableData: { headers: ['Item', 'Price'], rows: [['Burger', '$8'], ['Pizza', '$15'], ['Salad', '$10']] }, options: ['$5', '$7', '$8', '$10'], correctAnswer: 1, hint: 'Subtract the price of the Burger from the price of the Pizza.', explanation: '$15 - $8 = $7.' },
            { id: '4-o-e4', type: 'numerical', subject: 'Operations', difficulty: Difficulty.EASY, text: 'If you split 48 stickers equally between 4 friends, how many stickers does each friend get?', correctAnswer: '12', units: 'stickers', hint: 'Divide 48 by 4.', explanation: '48 / 4 = 12 stickers per friend.' },
            { id: '4-o-e5', type: 'open-ended', subject: 'Operations', difficulty: Difficulty.EASY, text: 'Why is multiplying by 10 easier than multiplying by 9? Explain.', correctAnswer: 'Accepting all explanations about adding a zero.', hint: 'Think about what happens to the digits.', explanation: 'Multiplying by 10 shifts place value and adds a zero.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '4-o-m1', type: 'numerical', subject: 'Operations', difficulty: Difficulty.MEDIUM, text: 'Solve 34 x 12.', correctAnswer: '408', units: '', hint: 'Multiply 34 by 10, then 34 by 2, and add them.', explanation: '340 + 68 = 408.' },
            { id: '4-o-m2', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.MEDIUM, text: 'A baker made 144 cookies. If he puts 6 cookies in each bag, how many bags does he need?', options: ['20', '24', '22', '26'], correctAnswer: 1, hint: 'Divide 144 by 6.', explanation: '144 / 6 = 24.' },
            { id: '4-o-m3', type: 'numerical', subject: 'Operations', difficulty: Difficulty.MEDIUM, text: 'A school bus can hold 48 students. How many students can 5 buses hold?', correctAnswer: '240', units: 'students', hint: 'Multiply 48 by 5.', explanation: '48 * 5 = 240.' },
            { id: '4-o-m4', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.MEDIUM, text: 'Look at the table. What is the total cost of 2 lunches and 3 juices?', tableData: { headers: ['Item', 'Cost'], rows: [['Lunch', '$7'], ['Juice', '$2']] }, options: ['$14', '$18', '$20', '$22'], correctAnswer: 2, hint: '(2 * 7) + (3 * 2).', explanation: '14 + 6 = 20.' },
            { id: '4-o-m5', type: 'open-ended', subject: 'Operations', difficulty: Difficulty.MEDIUM, text: 'Explain how you would estimate the product of 39 x 21.', correctAnswer: 'Round numbers to nearest ten.', hint: 'Round 39 and 21 first.', explanation: 'Estimate 40 x 20 = 800.' }
          ],
          [Difficulty.HARD]: [
            { id: '4-o-h1', type: 'numerical', subject: 'Operations', difficulty: Difficulty.HARD, text: 'A movie theater has 25 rows with 18 seats in each row. If 312 seats are filled, how many seats are empty?', correctAnswer: '138', units: 'seats', hint: 'Find total seats first, then subtract filled seats.', explanation: '(25 * 18) - 312 = 450 - 312 = 138.' },
            { id: '4-o-h2', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.HARD, text: 'Divide 966 by 7.', options: ['136', '138', '140', '142'], correctAnswer: 1, hint: 'Use long division or chunking.', explanation: '966 / 7 = 138.' },
            { id: '4-o-h3', type: 'numerical', subject: 'Operations', difficulty: Difficulty.HARD, text: 'Solve (45 + 55) x (12 - 8).', correctAnswer: '400', units: '', hint: 'Solve parentheses first.', explanation: '100 * 4 = 400.' },
            { id: '4-o-h4', type: 'multiple-choice', subject: 'Operations', difficulty: Difficulty.HARD, text: 'Find the missing number: (4 x 25) + ? = 150.', options: ['25', '50', '75', '100'], correctAnswer: 1, hint: '4 x 25 = 100.', explanation: '100 + 50 = 150.' },
            { id: '4-o-h5', type: 'open-ended', subject: 'Operations', difficulty: Difficulty.HARD, text: 'Describe a real-world situation where you would need to use both multiplication and subtraction.', correctAnswer: 'Accepting valid shopping or inventory scenarios.', hint: 'Think about buying multiple items and getting change.', explanation: 'Buying 3 packs of cards ($5 each) with a $20 bill involves 20 - (3 * 5).' }
          ]
        }
      },
      {
        name: 'Geometry',
        description: 'Lines, angles, and classifying shapes.',
        questions: {
          [Difficulty.EASY]: [
            { id: '4-g-e1', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.EASY, text: 'Which angle measures exactly 90 degrees?', options: ['Acute', 'Obtuse', 'Right', 'Straight'], correctAnswer: 2, hint: 'It looks like the corner of a square.', explanation: 'A right angle is exactly 90 degrees.' },
            { id: '4-g-e2', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.EASY, text: 'How many sides does a hexagon have?', correctAnswer: '6', units: 'sides', hint: 'Think of a honeycomb cell.', explanation: 'Hexagons have 6 sides.' },
            { id: '4-g-e3', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.EASY, text: 'Which type of line never intersects?', options: ['Parallel', 'Perpendicular', 'Intersecting', 'Overlapping'], correctAnswer: 0, hint: 'Like train tracks.', explanation: 'Parallel lines stay the same distance apart forever.' },
            { id: '4-g-e4', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.EASY, text: 'If a triangle has two equal sides, what is it called?', options: ['Scalene', 'Isosceles', 'Equilateral', 'Right'], correctAnswer: 1, hint: 'The name starts with "Iso".', explanation: 'An isosceles triangle has at least two equal sides.' },
            { id: '4-g-e5', type: 'open-ended', subject: 'Geometry', difficulty: Difficulty.EASY, text: 'Describe where you see parallel lines in your classroom or home.', correctAnswer: 'Accepting any valid pairs like door frames, tables.', hint: 'Look at the edges of things.', explanation: 'Parallel lines are found on many rectangular objects.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '4-g-m1', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.MEDIUM, text: 'Which shape always has 4 right angles and 4 equal sides?', options: ['Rectangle', 'Rhombus', 'Square', 'Parallelogram'], correctAnswer: 2, hint: 'It is a special kind of rectangle.', explanation: 'A square has 4 equal sides and 4 right angles.' },
            { id: '4-g-m2', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.MEDIUM, text: 'If an angle measures 45 degrees, what type of angle is it?', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 0, hint: 'Is it smaller than 90 degrees?', explanation: 'Angles less than 90 degrees are acute.' },
            { id: '4-g-m3', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.MEDIUM, text: 'How many pairs of parallel sides does a trapezoid have?', correctAnswer: '1', units: 'pair', hint: 'Look at the top and bottom sides.', explanation: 'A trapezoid has exactly one pair of parallel sides.' },
            { id: '4-g-m4', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.MEDIUM, text: 'What is a polygon with 5 sides called?', options: ['Hexagon', 'Pentagon', 'Octagon', 'Quadrilateral'], correctAnswer: 1, hint: 'Penta- means five.', explanation: 'A pentagon has 5 sides.' },
            { id: '4-g-m5', type: 'open-ended', subject: 'Geometry', difficulty: Difficulty.MEDIUM, text: 'What is the difference between a line and a line segment?', correctAnswer: 'Lines go forever, segments have endpoints.', hint: 'Think about arrows vs points.', explanation: 'A line goes on forever in both directions, while a line segment has a start and end.' }
          ],
          [Difficulty.HARD]: [
            { id: '4-g-h1', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.HARD, text: 'Which of these is NOT a characteristic of all parallelograms?', options: ['Opposite sides are parallel', 'Opposite angles are equal', 'All sides are equal length', 'Opposite sides are equal length'], correctAnswer: 2, hint: 'Only a rhombus or square must have all equal sides.', explanation: 'Not all parallelograms have equal side lengths (e.g., standard rectangles).' },
            { id: '4-g-h2', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.HARD, text: 'An angle measures 135 degrees. What type of angle is it?', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 2, hint: 'Is it bigger than 90?', explanation: 'Angles between 90 and 180 degrees are obtuse.' },
            { id: '4-g-h3', type: 'numerical', subject: 'Geometry', difficulty: Difficulty.HARD, text: 'How many lines of symmetry does a regular pentagon have?', correctAnswer: '5', units: 'lines', hint: 'Count from each vertex to the opposite side.', explanation: 'A regular polygon has as many lines of symmetry as sides.' },
            { id: '4-g-h4', type: 'multiple-choice', subject: 'Geometry', difficulty: Difficulty.HARD, text: 'If you combine two right triangles, which shape could you form?', options: ['Circle', 'Rectangle', 'Pentagon', 'Hexagon'], correctAnswer: 1, hint: 'Match the long sides (hypotenuses).', explanation: 'Two right triangles can form a rectangle or a larger triangle.' },
            { id: '4-o-h5', type: 'open-ended', subject: 'Geometry', difficulty: Difficulty.HARD, text: 'Why is a square also considered a rectangle?', correctAnswer: 'It meets all rectangle requirements.', hint: 'What are the rules for being a rectangle?', explanation: 'A rectangle is a quadrilateral with 4 right angles. Since a square has 4 right angles, it fits the definition.' }
          ]
        }
      },
      {
        name: 'Measurement',
        description: 'Units, conversions, and area/perimeter.',
        questions: {
          [Difficulty.EASY]: [
            { id: '4-m-e1', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.EASY, text: 'What is the perimeter of a rectangle with length 5cm and width 3cm?', correctAnswer: '16', units: 'cm', hint: 'Add all four sides: 5 + 3 + 5 + 3.', explanation: 'Perimeter = 2 * (L + W) = 16.' },
            { id: '4-m-e2', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.EASY, text: 'How many inches are in 2 feet?', options: ['12', '24', '36', '48'], correctAnswer: 1, hint: '1 foot = 12 inches.', explanation: '2 * 12 = 24 inches.' },
            { id: '4-m-e3', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.EASY, text: 'If you start homework at 4:15 PM and finish at 5:00 PM, how many minutes did you work?', correctAnswer: '45', units: 'minutes', hint: 'Count from 15 to 60.', explanation: '60 - 15 = 45 minutes.' },
            { id: '4-m-e4', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.EASY, text: 'Which is the best unit to measure the weight of an elephant?', options: ['Ounces', 'Grams', 'Pounds', 'Tons'], correctAnswer: 3, hint: 'Elephants are extremely heavy!', explanation: 'Tons are used for very large masses.' },
            { id: '4-m-e5', type: 'open-ended', subject: 'Measurement', difficulty: Difficulty.EASY, text: 'Why do we need different units like inches and miles? Why not just use inches for everything?', correctAnswer: 'Scale and convenience.', hint: 'Imagine writing the distance to the moon in inches.', explanation: 'Different units make large or small numbers easier to manage.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '4-m-m1', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.MEDIUM, text: 'Find the area of a square with a perimeter of 20cm.', correctAnswer: '25', units: 'sq cm', hint: 'Find the side length first (20/4).', explanation: 'Side = 5cm. Area = 5 * 5 = 25.' },
            { id: '4-m-m2', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.MEDIUM, text: 'How many milliliters are in 3 liters?', options: ['30', '300', '3000', '30000'], correctAnswer: 2, hint: '1 Liter = 1000 mL.', explanation: '3 * 1000 = 3000 mL.' },
            { id: '4-m-m3', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.MEDIUM, text: 'Convert 5 pounds into ounces.', correctAnswer: '80', units: 'oz', hint: '1 pound = 16 ounces.', explanation: '5 * 16 = 80.' },
            { id: '4-m-m4', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.MEDIUM, text: 'A yard is how many feet?', options: ['2', '3', '4', '12'], correctAnswer: 1, hint: 'It is a common unit on American football fields.', explanation: '1 yard = 3 feet.' },
            { id: '4-m-m5', type: 'open-ended', subject: 'Measurement', difficulty: Difficulty.MEDIUM, text: 'Describe a situation where knowing the perimeter is more important than knowing the area.', correctAnswer: 'Fencing or borders.', hint: 'Think about building a fence around a yard.', explanation: 'Perimeter is used when you need to know the length of a boundary.' }
          ],
          [Difficulty.HARD]: [
            { id: '4-m-h1', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.HARD, text: 'A garden is 12 feet long and 8 feet wide. If mulch costs $2 per square foot, how much will it cost to cover the garden?', correctAnswer: '192', units: '$', hint: 'Find area first, then multiply by cost.', explanation: '(12 * 8) * 2 = 96 * 2 = 192.' },
            { id: '4-m-h2', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.HARD, text: 'Convert 4 kilometers to meters.', options: ['40', '400', '4000', '40000'], correctAnswer: 2, hint: '1 km = 1000m.', explanation: '4 * 1000 = 4000.' },
            { id: '4-m-h3', type: 'numerical', subject: 'Measurement', difficulty: Difficulty.HARD, text: 'A train left at 10:45 AM and arrived at 2:15 PM. How many minutes long was the trip?', correctAnswer: '210', units: 'minutes', hint: 'Count hours first, then the remaining minutes.', explanation: '3 hours (180 mins) + 30 mins = 210 mins.' },
            { id: '4-m-h4', type: 'multiple-choice', subject: 'Measurement', difficulty: Difficulty.HARD, text: 'How many cups are in 2 gallons?', options: ['16', '32', '64', '8'], correctAnswer: 1, hint: '1 gallon = 4 quarts. 1 quart = 2 pints. 1 pint = 2 cups.', explanation: '1 gallon = 16 cups. 2 gallons = 32 cups.' },
            { id: '4-m-h5', type: 'open-ended', subject: 'Measurement', difficulty: Difficulty.HARD, text: 'Explain the relationship between the perimeter and area of a rectangle if you double its length and width.', correctAnswer: 'Perimeter doubles, Area quadruples.', hint: 'Try it with a 2x3 rectangle and then a 4x6 rectangle.', explanation: 'Doubling dimensions doubles perimeter but quadruples (x4) the area.' }
          ]
        }
      }
    ]
  },
  {
    grade: GradeLevel.GRADE_5,
    topics: [
      {
        name: 'Decimals',
        description: 'Operations, comparison, and multi-step word problems.',
        questions: {
          [Difficulty.EASY]: [
            { id: '5-d-e1', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.EASY, text: 'What is 0.5 + 0.5?', options: ['1.0', '0.10', '0.55', '5.5'], correctAnswer: 0, hint: 'Half plus half equals one whole.', explanation: 'Two halves make a whole!' },
            { id: '5-d-e2', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.EASY, text: 'Round 1.86 to the nearest tenth.', correctAnswer: '1.9', units: '', hint: 'Look at the digit in the hundredths place.', explanation: 'The 6 tells us to round the 8 up to 9.' },
            { id: '5-d-e3', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.EASY, text: 'Which item is the cheapest based on the table?', tableData: { headers: ['Item', 'Price'], rows: [['Pen', '$1.25'], ['Pencil', '$0.85'], ['Eraser', '$0.90']] }, options: ['Pen', 'Pencil', 'Eraser', 'All same'], correctAnswer: 1, hint: 'Compare the values digit by digit.', explanation: '$0.85 is less than $0.90 and $1.25.' },
            { id: '5-d-e4', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.EASY, text: 'Multiply 0.4 by 10.', correctAnswer: '4', units: '', hint: 'Move the decimal one place to the right.', explanation: '0.4 * 10 = 4.' },
            { id: '5-d-e5', type: 'open-ended', subject: 'Decimals', difficulty: Difficulty.EASY, text: 'What is the difference between 0.3 and 0.03? Explain using place value.', correctAnswer: 'Tenths vs Hundredths.', hint: 'Think about positions after the decimal.', explanation: '0.3 is 3 tenths, while 0.03 is 3 hundredths.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '5-d-m1', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.MEDIUM, text: 'Calculate 1.25 x 4.', correctAnswer: '5', units: '', hint: '1.25 + 1.25 = 2.5.', explanation: '2.5 * 2 = 5.' },
            { id: '5-d-m2', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.MEDIUM, text: 'Divide 2.4 by 0.6.', options: ['4', '0.4', '40', '0.04'], correctAnswer: 0, hint: 'How many 6s are in 24?', explanation: 'Move decimals: 24 / 6 = 4.' },
            { id: '5-d-m3', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.MEDIUM, text: 'Add 12.45 and 3.7.', correctAnswer: '16.15', units: '', hint: 'Line up the decimal points.', explanation: '12.45 + 3.70 = 16.15.' },
            { id: '5-d-m4', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.MEDIUM, text: 'Which is larger: 0.509 or 0.51?', options: ['0.509', '0.51', 'They are equal', 'Neither'], correctAnswer: 1, hint: 'Compare thousandths: 509 vs 510.', explanation: '0.51 is 0.510, which is larger than 0.509.' },
            { id: '5-d-m5', type: 'open-ended', subject: 'Decimals', difficulty: Difficulty.MEDIUM, text: 'Why do we shift the decimal point when dividing by a decimal?', correctAnswer: 'To work with whole numbers.', hint: 'Think about multiplying both numbers by 10 or 100.', explanation: 'Multiplying both divisor and dividend by the same power of 10 keeps the ratio the same but makes calculation easier.' }
          ],
          [Difficulty.HARD]: [
            { id: '5-d-h1', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.HARD, text: 'Solve 0.12 x 0.11.', correctAnswer: '0.0132', units: '', hint: '12 x 11 = 132. Count 4 decimal places.', explanation: '0.0132.' },
            { id: '5-d-h2', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.HARD, text: 'What is 10 / 0.25?', options: ['4', '40', '400', '0.4'], correctAnswer: 1, hint: 'How many quarters in 1 dollar? Now in 10?', explanation: '10 / 0.25 = 40.' },
            { id: '5-d-h3', type: 'numerical', subject: 'Decimals', difficulty: Difficulty.HARD, text: 'Round 3.14159 to the nearest thousandth.', correctAnswer: '3.142', units: '', hint: 'Look at the fourth decimal place.', explanation: 'The 5 tells us to round the 1 up to 2.' },
            { id: '5-d-h4', type: 'multiple-choice', subject: 'Decimals', difficulty: Difficulty.HARD, text: 'A runner ran 3.5 miles on Monday and 4.75 miles on Tuesday. How much further did they run on Tuesday?', options: ['1.25 miles', '1.5 miles', '1.15 miles', '1.35 miles'], correctAnswer: 0, hint: 'Subtract 3.5 from 4.75.', explanation: '4.75 - 3.50 = 1.25.' },
            { id: '5-d-h5', type: 'open-ended', subject: 'Decimals', difficulty: Difficulty.HARD, text: 'Explain how decimals are related to fractions like tenths and hundredths.', correctAnswer: 'Decimals are a way to write fractions with powers of 10.', hint: 'Think about 0.1 vs 1/10.', explanation: 'The positions after the decimal correspond to denominators of 10, 100, 1000, etc.' }
          ]
        }
      },
      {
        name: 'Algebra',
        description: 'Order of operations and numerical expressions.',
        questions: {
          [Difficulty.EASY]: [
            { id: '5-a-e1', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.EASY, text: 'Solve: (5 + 3) * 2', correctAnswer: '16', units: '', hint: 'Parentheses first!', explanation: '8 * 2 = 16.' },
            { id: '5-a-e2', type: 'multiple-choice', subject: 'Algebra', difficulty: Difficulty.EASY, text: 'Which expression shows "10 less than x"?', options: ['10 - x', 'x - 10', '10 / x', 'x + 10'], correctAnswer: 1, hint: 'If you have x candies and lose 10, how many are left?', explanation: 'x - 10 means 10 subtracted from x.' },
            { id: '5-a-e3', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.EASY, text: 'If x = 5, what is 3x + 2?', correctAnswer: '17', units: '', hint: '3x means 3 times x.', explanation: '3 * 5 + 2 = 15 + 2 = 17.' },
            { id: '5-a-e4', type: 'multiple-choice', subject: 'Algebra', difficulty: Difficulty.EASY, text: 'What is the next number in the pattern? 2, 4, 8, 16, ...', options: ['20', '32', '24', '18'], correctAnswer: 1, hint: 'The numbers are doubling.', explanation: '16 * 2 = 32.' },
            { id: '5-a-e5', type: 'open-ended', subject: 'Algebra', difficulty: Difficulty.EASY, text: 'Explain why we use letters (variables) in math.', correctAnswer: 'To represent unknowns or patterns.', hint: 'Think about when we don\'t know a value yet.', explanation: 'Variables let us write rules for any number.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '5-a-m1', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.MEDIUM, text: 'Solve 100 - (5 x 4) / 2.', correctAnswer: '90', units: '', hint: 'PEMDAS: Parentheses, then multiplication/division, then subtraction.', explanation: '100 - 20 / 2 = 100 - 10 = 90.' },
            { id: '5-a-m2', type: 'multiple-choice', subject: 'Algebra', difficulty: Difficulty.MEDIUM, text: 'If 2y = 14, what is y?', options: ['5', '6', '7', '8'], correctAnswer: 2, hint: '2 times what is 14?', explanation: '14 / 2 = 7.' },
            { id: '5-a-m3', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.MEDIUM, text: 'What is 4 cubed (4 to the power of 3)?', correctAnswer: '64', units: '', hint: '4 x 4 x 4.', explanation: '16 * 4 = 64.' },
            { id: '5-a-m4', subject: 'Algebra', difficulty: Difficulty.MEDIUM, type: 'multiple-choice', text: 'Which property says that 3 + 4 = 4 + 3?', options: ['Associative', 'Commutative', 'Distributive', 'Identity'], correctAnswer: 1, hint: 'The numbers "commute" or move around.', explanation: 'Commutative property handles order of addition/multiplication.' },
            { id: '5-a-m5', type: 'open-ended', subject: 'Algebra', difficulty: Difficulty.MEDIUM, text: 'Give an example of a numerical expression and an algebraic expression.', correctAnswer: '5+2 vs 5+x.', hint: 'One uses only numbers, one uses variables.', explanation: '5 + 2 is numerical. 5 + x is algebraic because it has a variable.' }
          ],
          [Difficulty.HARD]: [
            { id: '5-a-h1', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.HARD, text: 'Solve for x: 3(x + 2) = 24.', correctAnswer: '6', units: '', hint: 'Divide by 3 first, then subtract 2.', explanation: 'x + 2 = 8. x = 6.' },
            { id: '5-a-h2', type: 'multiple-choice', subject: 'Algebra', difficulty: Difficulty.HARD, text: 'Evaluate 2a² - 5 if a = 4.', options: ['27', '11', '59', '32'], correctAnswer: 0, hint: '4² = 16. Multiply by 2 then subtract 5.', explanation: '2(16) - 5 = 32 - 5 = 27.' },
            { id: '5-a-h3', type: 'numerical', subject: 'Algebra', difficulty: Difficulty.HARD, text: 'What is the value of n in 45 / (n - 2) = 5?', correctAnswer: '11', units: '', hint: '45 divided by what is 5? (9). So n - 2 = 9.', explanation: 'n = 11.' },
            { id: '5-a-h4', type: 'multiple-choice', subject: 'Algebra', difficulty: Difficulty.HARD, text: 'Which expression matches "triple the sum of x and 4"?', options: ['3x + 4', '3(x + 4)', 'x + 12', '3x * 4'], correctAnswer: 1, hint: 'Find the sum first (x + 4), then triple it.', explanation: '3(x + 4).' },
            { id: '5-a-h5', type: 'open-ended', subject: 'Algebra', difficulty: Difficulty.HARD, text: 'Explain the Distributive Property using the problem 4 x (10 + 2).', correctAnswer: 'Multiply 4 by both inside terms.', hint: 'Think about (4x10) and (4x2).', explanation: '4 x 10 + 4 x 2 = 40 + 8 = 48.' }
          ]
        }
      },
      {
        name: 'Advanced Operations',
        description: 'GEMDAS mastery and complex fraction word problems.',
        questions: {
          [Difficulty.EASY]: [
            { id: '5-ao-e1', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.EASY, text: 'Evaluate: 10 + (2 x 5).', correctAnswer: '20', units: '', hint: 'Do the multiplication inside the parentheses first.', explanation: '2 x 5 = 10. Then 10 + 10 = 20.' },
            { id: '5-ao-e2', type: 'multiple-choice', subject: 'Advanced Operations', difficulty: Difficulty.EASY, text: 'A chef uses 1/2 cup of milk for one batch of muffins. How many cups are needed for 4 batches?', options: ['1 cup', '2 cups', '4 cups', '1/4 cup'], correctAnswer: 1, hint: 'Multiply 1/2 by 4.', explanation: '1/2 * 4 = 2 whole cups.' },
            { id: '5-ao-e3', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.EASY, text: 'Solve: 15 / 3 + 2.', correctAnswer: '7', units: '', hint: 'Division comes before addition in order of operations.', explanation: '15 / 3 = 5. 5 + 2 = 7.' },
            { id: '5-ao-e4', type: 'multiple-choice', subject: 'Advanced Operations', difficulty: Difficulty.EASY, text: 'Which operation is done first in this expression? 5 + [10 / (2 x 1)]', options: ['Addition', 'Division', 'Multiplication', 'Subtraction'], correctAnswer: 2, hint: 'Always start with the innermost grouping.', explanation: 'Parentheses ( ) are inside Brackets [ ], so we do (2 x 1) first.' },
            { id: '5-ao-e5', type: 'open-ended', subject: 'Advanced Operations', difficulty: Difficulty.EASY, text: 'What does the G in GEMDAS stand for, and why is it first?', correctAnswer: 'Groupings (Parentheses, Brackets).', hint: 'Think about things that are bundled together.', explanation: 'G stands for Groupings. It ensures we prioritize parts of a problem that need to be solved as a single unit.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '5-ao-m1', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.MEDIUM, text: 'A baker has 4 cups of sugar. Each cake requires 1/3 cup of sugar. How many cakes can the baker make?', correctAnswer: '12', units: 'cakes', hint: 'This is a division problem: 4 divided by 1/3.', explanation: '4 / (1/3) is the same as 4 x 3 = 12.' },
            { id: '5-ao-m2', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.MEDIUM, text: 'Evaluate: 20 - 3^2 + 5.', correctAnswer: '16', units: '', hint: 'E is for Exponents! Solve 3 squared first.', explanation: '20 - 9 + 5 = 11 + 5 = 16.' },
            { id: '5-ao-m3', type: 'multiple-choice', subject: 'Advanced Operations', difficulty: Difficulty.MEDIUM, text: 'A runner completes 3/4 of a 12-mile trail. How many miles did they run?', options: ['6 miles', '8 miles', '9 miles', '10 miles'], correctAnswer: 2, hint: 'Multiply 12 by 3/4.', explanation: '12 * 3/4 = (12/4) * 3 = 3 * 3 = 9.' },
            { id: '5-ao-m4', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.MEDIUM, text: 'Solve: (10 + 2) x (15 - 10) / 2.', correctAnswer: '30', units: '', hint: 'Solve both parentheses first, then multiply, then divide.', explanation: '12 x 5 / 2 = 60 / 2 = 30.' },
            { id: '5-ao-m5', type: 'open-ended', subject: 'Advanced Operations', difficulty: Difficulty.MEDIUM, text: 'Explain the difference between multiplying a whole number by a fraction and dividing a whole number by a fraction.', correctAnswer: 'Scaling up vs scaling down/grouping.', hint: 'Think about "half of 4" versus "how many halves are in 4?".', explanation: 'Multiplying by a fraction (like 1/2) scales the number down. Dividing by a fraction (like 1/2) asks how many small parts fit into the whole, which usually results in a larger number.' }
          ],
          [Difficulty.HARD]: [
            { id: '5-ao-h1', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.HARD, text: 'Evaluate: 5 x [12 - (2^2 + 1)] + 3.', correctAnswer: '38', units: '', hint: 'Work from the inside out: Exponent, then Parentheses, then Brackets.', explanation: '5 x [12 - (4 + 1)] + 3 = 5 x [12 - 5] + 3 = 5 x 7 + 3 = 35 + 3 = 38.' },
            { id: '5-ao-h2', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.HARD, text: 'A container holds 5 1/2 liters of water. If you pour it into 1/4 liter bottles, how many full bottles can you fill?', correctAnswer: '22', units: 'bottles', hint: 'Convert 5 1/2 to an improper fraction first (11/2).', explanation: '11/2 divided by 1/4 = 11/2 * 4 = 44/2 = 22.' },
            { id: '5-ao-h3', type: 'multiple-choice', subject: 'Advanced Operations', difficulty: Difficulty.HARD, text: 'Solve: {15 - [2 x (3 + 1)]} + 10^2.', options: ['107', '115', '123', '100'], correctAnswer: 0, hint: 'Handle inner parentheses, then brackets, then braces, then exponent.', explanation: '{15 - [2 x 4]} + 100 = {15 - 8} + 100 = 7 + 100 = 107.' },
            { id: '5-ao-h4', type: 'numerical', subject: 'Advanced Operations', difficulty: Difficulty.HARD, text: 'A recipe for 10 people requires 3/4 pound of cheese. How much cheese is needed for 25 people?', correctAnswer: '1.875', units: 'lbs', hint: 'First find the amount for 1 person (divide by 10), then multiply by 25.', explanation: '3/4 / 10 = 3/40. 3/40 * 25 = 75/40 = 1.875 (or 1 7/8).' },
            { id: '5-ao-h5', type: 'open-ended', subject: 'Advanced Operations', difficulty: Difficulty.HARD, text: 'Create a multi-step word problem that requires using both brackets [ ] and parentheses ( ) to solve correctly.', correctAnswer: 'Evaluates logical construction.', hint: 'Think about a scenario with different groups of items and costs.', explanation: 'Example: 2 x [ (5 + 3) - (1 + 1) ] where items are bought and some returned.' }
          ]
        }
      },
      {
        name: 'Fraction Hero',
        description: 'Multi-step mastery of multiplying and dividing fractions in real-world scenarios.',
        questions: {
          [Difficulty.EASY]: [
            { id: '5-fh-e1', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.EASY, text: 'What is 1/2 of 1/4?', correctAnswer: '1/8', units: '', hint: 'Multiplying fractions means multiplying across: 1x1 and 2x4.', explanation: '1/2 * 1/4 = 1/8.' },
            { id: '5-fh-e2', type: 'multiple-choice', subject: 'Fraction Hero', difficulty: Difficulty.EASY, text: 'If you have 3 whole pizzas and cut each into 1/3 slices, how many slices do you have?', options: ['1', '6', '9', '3'], correctAnswer: 2, hint: 'This is 3 divided by 1/3.', explanation: '3 / (1/3) = 3 * 3 = 9.' },
            { id: '5-fh-e3', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.EASY, text: 'Calculate: 4 x 2/5.', correctAnswer: '8/5', units: '', hint: 'Multiply the whole number by the numerator.', explanation: '4 * 2 / 5 = 8/5 or 1 3/5.' },
            { id: '5-fh-e4', type: 'multiple-choice', subject: 'Fraction Hero', difficulty: Difficulty.EASY, text: 'A recipe calls for 2/3 cup of flour. If you make half a recipe, how much flour is needed?', options: ['1/3 cup', '4/3 cup', '1/2 cup', '1/6 cup'], correctAnswer: 0, hint: 'Find 1/2 of 2/3.', explanation: '1/2 * 2/3 = 2/6 = 1/3.' },
            { id: '5-fh-e5', type: 'open-ended', subject: 'Fraction Hero', difficulty: Difficulty.EASY, text: 'Why does dividing by 1/2 give you a larger number than what you started with?', correctAnswer: 'Grouping logic.', hint: 'Think about how many half-dollars are in a 5 dollar bill.', explanation: 'Dividing by a fraction less than 1 asks "how many small parts fit into this whole?". There are more small parts than there are wholes.' }
          ],
          [Difficulty.MEDIUM]: [
            { id: '5-fh-m1', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.MEDIUM, text: 'A board is 6 feet long. You cut off 3/4 of it. How many feet are left?', correctAnswer: '1.5', units: 'feet', hint: 'Find 3/4 of 6 first, then subtract from 6. Or just find 1/4 of 6.', explanation: '1/4 of 6 is 6/4 = 1.5.' },
            { id: '5-fh-m2', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.MEDIUM, text: 'Multiply 2 1/2 by 1/2.', correctAnswer: '1.25', units: '', hint: 'Change 2 1/2 to 5/2 first.', explanation: '5/2 * 1/2 = 5/4 = 1.25.' },
            { id: '5-fh-m3', type: 'multiple-choice', subject: 'Fraction Hero', difficulty: Difficulty.MEDIUM, text: 'Divide 1/4 by 3.', options: ['1/12', '3/4', '12', '1/7'], correctAnswer: 0, hint: 'Imagine sharing a 1/4 pizza with 3 friends.', explanation: '1/4 / 3 = 1/12.' },
            { id: '5-fh-m4', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.MEDIUM, text: 'A garden is 1/2 acre. If 1/5 of the garden is planted with roses, what fraction of an acre is roses?', correctAnswer: '1/10', units: 'acre', hint: 'Multiply 1/2 by 1/5.', explanation: '1/2 * 1/5 = 1/10.' },
            { id: '5-fh-m5', type: 'open-ended', subject: 'Fraction Hero', difficulty: Difficulty.MEDIUM, text: 'Explain how you can use a model to show 1/3 divided by 2.', correctAnswer: 'Visual proof.', hint: 'Draw a rectangle, split it in 3, then cut those in half.', explanation: 'Take one third of a rectangle and split it into two equal parts. Each part is 1/6 of the whole.' }
          ],
          [Difficulty.HARD]: [
            { id: '5-fh-h1', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.HARD, text: 'A gas tank is 1/4 full. Adding 6 gallons makes it 5/8 full. How many gallons does the tank hold in total?', correctAnswer: '16', units: 'gallons', hint: 'The difference between 5/8 and 1/4 (2/8) is 3/8. So 3/8 of the tank is 6 gallons.', explanation: '3/8 * Total = 6. Total = 6 * 8 / 3 = 16.' },
            { id: '5-fh-h2', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.HARD, text: 'Evaluate: (1/2 + 1/3) x 12.', correctAnswer: '10', units: '', hint: 'Find common denominator for addition (1/2 = 3/6, 1/3 = 2/6).', explanation: '5/6 * 12 = 60/6 = 10.' },
            { id: '5-fh-h3', type: 'multiple-choice', subject: 'Fraction Hero', difficulty: Difficulty.HARD, text: 'A hiker walked 2 2/3 miles in 4/5 of an hour. What was their speed in miles per hour?', options: ['3 1/3 mph', '2 1/5 mph', '3 mph', '3 2/3 mph'], correctAnswer: 0, hint: 'Divide 8/3 by 4/5.', explanation: '8/3 * 5/4 = 40/12 = 10/3 = 3 1/3.' },
            { id: '5-fh-h4', type: 'numerical', subject: 'Fraction Hero', difficulty: Difficulty.HARD, text: 'What is 3/4 of [ 10 - (2 x 1/2) ]?', correctAnswer: '6.75', units: '', hint: 'GEMDAS! 2 x 1/2 = 1. Then 10 - 1 = 9. Then 3/4 of 9.', explanation: '3/4 * 9 = 27/4 = 6.75.' },
            { id: '5-fh-h5', type: 'open-ended', subject: 'Fraction Hero', difficulty: Difficulty.HARD, text: 'Explain a multi-step process for solving: "How many 1/8 liter servings are in a container that has 2 1/2 liters?".', correctAnswer: 'Step-by-step logic.', hint: 'Convert to improper fraction, then divide.', explanation: 'First, change 2 1/2 to 5/2. Then divide 5/2 by 1/8. This is 5/2 * 8 = 40/2 = 20 servings.' }
          ]
        }
      }
    ]
  }
];
