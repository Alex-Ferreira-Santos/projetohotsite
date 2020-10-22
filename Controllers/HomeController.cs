﻿using System;
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
                return View("Index",cad);
            }
            catch (Exception e)
            {
                _logger.LogError($"Erro na tentativa de cadastro, ERRO: {e.Message}");
                ViewBag.Track = e.StackTrace;
                ViewBag.Message = e.Message;
                return View("Erro");
            }
        }

        public IActionResult _Agenda(){
            return PartialView();
        }

        public IActionResult _Apoiadores(){
            return PartialView();
        }

        public IActionResult _Dicas(){
            return PartialView();
        }
    }
}
