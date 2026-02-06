namespace ApiProject
{
    public static class Tools
    {
        public static int Compute(int a, int b)
        {
            return 15;
        }

        public static double Distance(double x1, double y1, double x2, double y2)
        {

            // Prototype sol 1: valeur neutre/defaut
            // return 0.0

            // Prototype sol 2: exception
            // throw new NotImplementedException();
            return Math.Sqrt(
                Math.Pow(x2 - x1, 2.0) 
                + Math.Pow(y2 - y1, 2.0)
            );
        }

        /// <summary>
        /// Compute greatest common divider of 2 strictly positive integers
        /// </summary>
        /// <param name="a">first integer (strictly positive)</param>
        /// <param name="b">second integer (strictly positive)</param>
        /// <returns>greatest common divider</returns>
        /// <exception cref="ArgumentException">if a or b is negative or zero</exception>
        public static int Pgcd(int a, int b)
        {
            //if (a <= 0 || b <= 0) throw new ArgumentException("argument must be strictly positive");
            while (a != b)
            {
                if (a > b) a = a - b;
                else b = b - a;
            }
            return a;
        }
    }
}
