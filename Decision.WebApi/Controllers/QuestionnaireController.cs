using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Decision.Model;
using Decision.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Decision.WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuestionnaireController : ControllerBase
    {
        public IQuestionService QuestionService { get; set; }
        public QuestionnaireController(IQuestionService questionService)
        {
            QuestionService = questionService;
        }
        // GET: <QuestionnaireController>
        [HttpGet]
        public Question Get()
        {
            return QuestionService.GetRootQuestion();
        }
    }
}
