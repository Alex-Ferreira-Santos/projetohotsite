using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Hotsite.Models;

namespace Hotsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Cadastrar(Interesse cad)
        {
            try
            {
                DatabaseService dbs = new DatabaseService();
                dbs.CadastraInteresse(cad);
                ViewBag.Mensagem = 1;
                return View("Index",cad);
            }
            catch (Exception e)
            {
                _logger.LogWarning("Erro na tentativa de cadastro, tente novamente mais tarde");
                _logger.LogError($"ERRO: {e.Message}");
                ViewBag.Track = e.StackTrace;
                ViewBag.Message = e.Message;
                return View("Erro");
            }
        }

    }
}
