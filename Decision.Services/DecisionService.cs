using Decision.Model;
using Decision.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Decision.Services
{
    public class DecisionService : IDecisionService
    {
        private Question Question { get; set; }
        public DecisionService()
        {
            Question = new Question()
            {
                QuestionBody = "Do you like healthy food?",
                LeftChoice = "yes",
                LeftQuestion = new Question()
                {
                    QuestionBody = "Do you prefer fruits or vegetables?",
                    LeftChoice = "Fruits",
                    LeftQuestion = new Question()
                    {
                        QuestionBody = "Apple or Banana?",
                        LeftChoice = "Apple",
                        LeftQuestion = null,
                        RightChoice = "Banana",
                        RightQuestion = null
                    },
                    RightChoice = "vegetables",
                    RightQuestion = new Question()
                    {
                        QuestionBody = "Tomato or Cucumber?",
                        LeftChoice = "Tomato",
                        LeftQuestion = null,
                        RightChoice = "Cucumber",
                        RightQuestion = null
                    }
                },
                RightChoice = "No",
                RightQuestion = new Question()
                {
                    QuestionBody = "Do you prefer Fast food or Sweets?",
                    LeftChoice = "Fast food",
                    LeftQuestion = new Question()
                    {
                        QuestionBody = "Pizza or Burger?",
                        LeftChoice = "Pizza",
                        LeftQuestion = null,
                        RightChoice = "Burger",
                        RightQuestion = null
                    },
                    RightChoice = "Sweets",
                    RightQuestion = new Question()
                    {
                        QuestionBody = "Chocolate or Cookies?",
                        LeftChoice = "Chocolate",
                        LeftQuestion = null,
                        RightChoice = "Cookies",
                        RightQuestion = null
                    }
                }
            };
        }
    }
}
