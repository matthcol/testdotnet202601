using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiProject
{
    public class TestTools
    {
        [Fact]
        void TestCompute_case1()
        {
            // Arrange
            int a = 1;
            int b = 2;
            // Act
            int result = Tools.Compute(a, b);
            // Assert
            Assert.Equal(12, result);
        }

        [Fact]
        void TestCompute_case2()
        {
            // Arrange
            int a = 3;
            int b = 4;
            // Act
            int result = Tools.Compute(a, b);
            // Assert
            Assert.Equal(15, result);
        }

        [Theory]
        [InlineData(1, 2, 12)]
        [InlineData(3, 4, 15)]
        void TestCompute_ok(int a, int b, int expectedResult)
        {
            // Arrange : cf parameters
            // Act
            int actualResult = Tools.Compute(a, b);
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData(0.1, 3.2, 5.4, 7.7, 6.952697318307, 1E-12)]
        [InlineData(2.5, 3.25, 5.5, 7.25, 5.0, 0.0)]
        // [InlineData(2.5E300, 3.25E300, 5.5E300, 7.25E300, 5.0E300, 0.0)]
        [InlineData(2.5E150, 3.25E150, 5.5E150, 7.25E150, 5.0E150, 1E138)]
        [InlineData(2.5E-150, 3.25E-150, 5.5E-150, 7.25E-150, 5.0E-150, 0.0)]
        void TestDistance(double x1, double y1, double x2, double y2, double expectedDistance, double precision)
        {
            double actualDistance = Tools.Distance(x1, y1, x2, y2);
            Assert.Equal(expectedDistance, actualDistance, precision);
        }

        [Theory]
        [InlineData(1, 1, 1)]
        [InlineData(1, 5, 1)]
        [InlineData(5, 1, 1)]
        [InlineData(15, 21, 3)]
        [InlineData(21, 15, 3)]
        // TODO: case with a lot of iteration
        void TestPgcd_ok(int a, int b, int expectedPgcd)
        {
            int actualPgcd = Tools.Pgcd(a, b);
            Assert.Equal(expectedPgcd, actualPgcd);
        }

        [Theory]
        [InlineData(0, 1)]
        [InlineData(1, 0)]
        [InlineData(-5, 1)]
        [InlineData(1, -5)]
        // TODO: timeout si boucle infinie
        void TestPgcd_ko(int a, int b)
        {
            Assert.Throws<ArgumentException>(() => Tools.Pgcd(a, b)); // indirect call (bac à sable)
        }


        //  qqs demos : pas des TU

        [Fact]
        void TestOverflow()
        {
            Int16 x = Int16.MaxValue;
            Int16 y = ++x;
            Assert.Equal(Int16.MinValue, y);
        }

        [Fact]
        void TestNan()
        {
            double x = Double.NaN * 2;
            // Assert.Equal(Double.NaN, x);
            Assert.True(Double.IsNaN(x), "result is Nan failed");
        }
    }
}
