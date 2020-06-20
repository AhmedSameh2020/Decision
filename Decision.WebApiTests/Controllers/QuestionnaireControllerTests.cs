using Microsoft.VisualStudio.TestTools.UnitTesting;
using Decision.WebApi.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using Decision.Services;

namespace Decision.WebApi.Controllers.Tests
{
    [TestClass()]
    public class QuestionnaireControllerTests
    {
        [TestMethod()]
        public void GetTest()
        {
            var result = new QuestionnaireController(new QuestionService()).Get();
            Assert.IsNotNull(result);
        }
    }
}