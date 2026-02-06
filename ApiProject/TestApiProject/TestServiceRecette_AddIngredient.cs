using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiProject
{
    public class TestServiceRecette_AddIngredient
    {
        [Fact]
        public void TestAddIngredient_added()
        {
            // Arrange
            // 0. data input
            string name = "farine";
            // 1. mock dependance
            var repositoryRecette = new Mock<IRepositoryRecette>();
            // 2. Composant à tester avec DI sur le mock
            ServiceRecette serviceRecette = new ServiceRecette(repositoryRecette.Object);
            // 3. Setup mock
            repositoryRecette.Setup(r => r.AddIngredient(name)).Returns(true);

            // Act
            bool result = serviceRecette.AddIngredient(name);

            // Assert
            // 1 - validité du résultat
            Assert.True(result, "Add ingrédient ok");
            // 2 - vérifier le mock
            repositoryRecette.Verify(r => r.AddIngredient(name), Times.Once);
        }

        [Fact]
        public void TestAddIngredient_notAdded()
        {
            // Arrange
            // 0. data input
            string name = "farine";
            // 1. mock dependance
            var repositoryRecette = new Mock<IRepositoryRecette>();
            // 2. Composant à tester avec DI sur le mock
            ServiceRecette serviceRecette = new ServiceRecette(repositoryRecette.Object);
            // 3. Setup mock
            repositoryRecette.Setup(r => r.AddIngredient(It.IsAny<string>())).Returns(false);

            // Act
            bool result = serviceRecette.AddIngredient(name);

            // Assert
            // 1 - validité du résultat
            Assert.False(result, "Add ingrédient ko");
            // 2 - vérifier le mock
            repositoryRecette.Verify(r => r.AddIngredient(It.IsAny<string>()), Times.Once);
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        [InlineData("\t \n")]
        public void TestAddIngredient_argumentNotValid(string? name)
        {
            // Arrange
            // 1. mock dependance
            var repositoryRecette = new Mock<IRepositoryRecette>();
            // 2. Composant à tester avec DI sur le mock
            ServiceRecette serviceRecette = new ServiceRecette(repositoryRecette.Object);
            // 3. Not Setup (pas censé etre appelé)

            // Act + Assert 1.
            Assert.Throws<ArgumentException>(() => serviceRecette.AddIngredient(name));
         
            // Assert 2 : mock
            repositoryRecette.Verify(r => r.AddIngredient(It.IsAny<string>()), Times.Never);

        }

        public static IEnumerable<object?[]> TestAddIngredient_argumentNotValidAlt_data()
        {
            return new List<object?[]>
            {
                new object?[]{"_whenNull",  null},
                new object?[]{"_whenEmpty", ""},
                new object?[]{"_whenWhiteSpaces", "\t \n"}
            };
        }

        [Theory]
        [MemberData(nameof(TestAddIngredient_argumentNotValidAlt_data))]
        // TODO : personnaliser l'injection pour n'avoir que le displayName
        public void TestAddIngredient_argumentNotValidAlt(string displayName, string? nameIngredient)
        {
            // Arrange
            // 1. mock dependance
            var repositoryRecette = new Mock<IRepositoryRecette>();
            // 2. Composant à tester avec DI sur le mock
            ServiceRecette serviceRecette = new ServiceRecette(repositoryRecette.Object);
            // 3. Not Setup (pas censé etre appelé)

            // Act + Assert 1.
            Assert.Throws<ArgumentException>(() => serviceRecette.AddIngredient(nameIngredient));

            // Assert 2 : mock
            repositoryRecette.Verify(r => r.AddIngredient(It.IsAny<string>()), Times.Never);

        }

    }
}
